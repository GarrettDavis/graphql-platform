using System;
using System.Globalization;
using HotChocolate.Configuration;
using HotChocolate.Data.Filters;
using HotChocolate.Language;
using HotChocolate.Types;

namespace HotChocolate.Data.ElasticSearch.Filters;

/// <summary>
/// This filter operation handler maps a Contains operation field to a
/// <see cref="ISearchOperation"/>
/// </summary>
public class ElasticSearchStringContainsOperationHandler
    : ElasticSearchOperationHandlerBase
{
    /// <summary>
    /// Initializes a new instance of
    /// <see cref="ElasticSearchStringContainsOperationHandler"/>
    /// </summary>
    public ElasticSearchStringContainsOperationHandler(InputParser inputParser)
        : base(inputParser)
    {
    }

    /// <inheritdoc />
    public override bool CanHandle(
        ITypeCompletionContext context,
        IFilterInputTypeDefinition typeDefinition,
        IFilterFieldDefinition fieldDefinition)
        => context.Type is StringOperationFilterInputType &&
            fieldDefinition is FilterOperationFieldDefinition
            {
                Id: DefaultFilterOperations.Contains
            };

    /// <inheritdoc />
    public override ISearchOperation HandleOperation(
        ElasticSearchFilterVisitorContext context,
        IFilterOperationField field,
        IValueNode value,
        object? parsedValue)
    {
        if (parsedValue is not string val)
        {
            throw ThrowHelper.Filtering_WrongValueProvided(field);
        }

        IElasticFilterMetadata metadata     = field.GetElasticMetadata();

        var                    sanitizedVal = val.Replace("*", @"\*").Replace("?",@"\?");

        return new WildcardOperation(
            context.GetPath(),
            metadata.Kind,
            $"*{sanitizedVal}*");
    }
}
