using System.Linq;
using StrawberryShake.CodeGeneration.CSharp.Builders;
using static StrawberryShake.CodeGeneration.NamingConventions;
using static StrawberryShake.CodeGeneration.CSharp.WellKnownNames;

namespace StrawberryShake.CodeGeneration.CSharp
{
    public partial class JsonResultBuilderGenerator : ClassBaseGenerator<ResultBuilderDescriptor>
    {
        private void AddBuildDataMethod(TypeDescriptor resultType)
        {
            var objParameter = "obj";
            var buildDataMethod = MethodBuilder.New()
                .SetAccessModifier(AccessModifier.Private)
                .SetName("BuildData")
                .SetReturnType(
                    $"({resultType.Name}, {ResultInfoNameFromTypeName(resultType.Name)})")
                .AddParameter(
                    ParameterBuilder.New()
                        .SetType("JsonElement")
                        .SetName(objParameter));

            var sessionName = "session";
            buildDataMethod.AddCode(
                CodeLineBuilder.New()
                    .SetLine(
                        CodeBlockBuilder.New()
                            .AddCode($"using {WellKnownNames.IEntityUpdateSession} {sessionName} = ")
                            .AddCode(EntityStoreFieldName + ".BeginUpdate();")));

            var entityIdsName = "entityIds";
            buildDataMethod.AddCode(
                CodeLineBuilder.New()
                    .SetLine($"var {entityIdsName} = new HashSet<{WellKnownNames.EntityId}>();"));

            buildDataMethod.AddEmptyLine();
            foreach (TypeMemberDescriptor property in 
                resultType.Properties.Where(prop => prop.Type.IsEntityType))
            {
                buildDataMethod.AddCode(
                    AssignmentBuilder.New()
                        .SetLefthandSide($"{WellKnownNames.EntityId} {property.Name}Id")
                        .SetRighthandSide(
                            BuildUpdateMethodCall(property)));
            }

            var resultInfoConstructor = MethodCallBuilder.New()
                .SetMethodName($"new {ResultInfoNameFromTypeName(resultType.Name)}")
                .SetDetermineStatement(false);

            foreach (TypeMemberDescriptor property in resultType.Properties)
            {
                if (property.Type.IsEntityType)
                {
                    resultInfoConstructor.AddArgument($"{property.Name}Id");
                }
                else
                {
                    resultInfoConstructor.AddArgument(BuildUpdateMethodCall(property));
                }
            }

            resultInfoConstructor.AddArgument(entityIdsName);
            resultInfoConstructor.AddArgument($"{sessionName}.{IEntityUpdateSession_Version}");

            buildDataMethod.AddEmptyLine();
            var resultInfoName = "resultInfo";
            buildDataMethod.AddCode(
                AssignmentBuilder.New()
                    .SetLefthandSide($"var {resultInfoName}")
                    .SetRighthandSide(resultInfoConstructor));

            buildDataMethod.AddEmptyLine();
            buildDataMethod.AddCode(
                $"return ({ResultDataFactoryFieldName}" + 
                $".Create({resultInfoName}), {resultInfoName});");

            ClassBuilder.AddMethod(buildDataMethod);
        }
    }
}
