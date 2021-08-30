using System;
using HotChocolate.Types;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using static Microsoft.CodeAnalysis.CSharp.SyntaxFactory;

namespace HotChocolate.CodeGeneration.EntityFramework.Types
{
    public class SchemaConventionsDirective : IModelConfiguringDirective
    {
        internal const string DirectiveName = "schemaConventions";

        internal string DbContextName { get; set; } = "AppDbContext";

        internal string GeneratedIdFieldName { get; set; } = "id";

        internal string GeneratedIdPropertyName { get; set; } = "Id";

        internal Type GeneratedIdRuntimeType { get; set; } = typeof(int);

        public bool UsePluralizedTableNames { get; set; } = true;

        public StatementSyntax AsConfigurationStatement()
        {
            // Doesn't need to do anything yet
            return Block();
        }
    }

    public class SchemaConventionsDirectiveType : DirectiveType<SchemaConventionsDirective>
    {
        protected override void Configure(IDirectiveTypeDescriptor<SchemaConventionsDirective> descriptor)
        {
            descriptor
                .Name(SchemaConventionsDirective.DirectiveName)
                .Location(DirectiveLocation.Schema);

            descriptor
                .Argument(t => t.UsePluralizedTableNames)
                .Description(
                    "If true, table names will be pluralized (e.g. Users) " +
                    "rather than singular (e.g. User). Default: true.")
                .Type<BooleanType>();
        }
    }
}