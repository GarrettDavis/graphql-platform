namespace HotChocolate.Fusion.Clients;

internal sealed class GraphQLClientFactory
{
    private readonly Dictionary<string, IGraphQLClient> _executors;

    public GraphQLClientFactory(IEnumerable<IGraphQLClient> executors)
    {
        _executors = executors.ToDictionary(t => t.SubGraphName);
    }

    public IGraphQLClient Create(string schemaName)
        => _executors[schemaName];
}
