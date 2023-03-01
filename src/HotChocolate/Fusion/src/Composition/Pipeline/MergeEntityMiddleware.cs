using HotChocolate.Skimmed;
using HotChocolate.Utilities;
using static HotChocolate.Fusion.Composition.DirectiveArguments;

namespace HotChocolate.Fusion.Composition.Pipeline;

public class MergeEntityMiddleware : IMergeMiddleware
{
    public async ValueTask InvokeAsync(CompositionContext context, MergeDelegate next)
    {
        foreach (var entity in context.Entities)
        {
            var entityType = (ObjectType)context.FusionGraph.Types[entity.Name];

            foreach (var part in entity.Parts)
            {
                context.Merge(part, entityType);
            }

            context.ApplyResolvers(entityType, entity.Metadata);
        }

        if (!context.Log.HasErrors)
        {
            await next(context);
        }
    }
}

static file class MergeEntitiesMiddlewareExtensions
{
    public static void Merge(this CompositionContext context, EntityPart source, ObjectType target)
    {
        if (string.IsNullOrEmpty(target.Description))
        {
            target.Description = source.Type.Description;
        }

        foreach (var interfaceType in source.Type.Implements)
        {
            if (!target.Implements.Any(t => t.Name.EqualsOrdinal(interfaceType.Name)))
            {
                target.Implements.Add((InterfaceType)context.FusionGraph.Types[interfaceType.Name]);
            }
        }

        foreach (var sourceField in source.Type.Fields)
        {
            if (target.Fields.TryGetField(sourceField.Name, out var targetField))
            {
                context.MergeField(sourceField, targetField);
            }
            else
            {
                targetField = context.CreateField(sourceField);
                target.Fields.Add(targetField);
            }

            context.ApplySource(sourceField, source.Schema.Name, targetField);
        }
    }

    public static void ApplyResolvers(
        this CompositionContext context,
        ObjectType entityType,
        EntityMetadata metadata)
    {
        foreach (var resolver in metadata.EntityResolvers)
        {
            entityType.Directives.Add(
                CreateResolverDirective(
                    context,
                    resolver));

            foreach (var variable in resolver.Variables)
            {
                entityType.Directives.Add(
                    CreateVariableDirective(
                        context,
                        variable,
                        resolver.SchemaName));
            }
        }
    }

    private static void ApplySource(
        this CompositionContext context,
        OutputField sourceField,
        string sourceSchemaName,
        OutputField targetField)
    {
        if (sourceField.ContextData.TryGetValue("originalName", out var value) &&
            value is string originalName)
        {
            targetField.Directives.Add(
                new Directive(
                    context.FusionTypes.Source,
                    new Argument(SchemaArg, sourceSchemaName),
                    new Argument(NameArg, originalName)));
        }
        else
        {
            targetField.Directives.Add(
                new Directive(
                    context.FusionTypes.Source,
                    new Argument(SchemaArg, sourceSchemaName)));
        }
    }

    private static Directive CreateResolverDirective(
        CompositionContext context,
        EntityResolver resolver)
        => new Directive(
            context.FusionTypes.Resolver,
            new Argument(SelectArg, resolver.SelectionSet.ToString(false)),
            new Argument(SchemaArg, resolver.SchemaName));

    private static Directive CreateVariableDirective(
        CompositionContext context,
        KeyValuePair<string, VariableDefinition> variable,
        string schemaName)
        => new Directive(
            context.FusionTypes.Variable,
            new Argument(NameArg, variable.Key),
            new Argument(SelectArg, variable.Value.Field.ToString(false)),
            new Argument(SchemaArg, schemaName),
            new Argument(TypeArg, variable.Value.Definition.Type.ToString(false)));
}
