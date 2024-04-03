import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://api.studio.thegraph.com/query/70114/boringjobs/version/latest',
    cache: new InMemoryCache(),
});

export { client, gql, ApolloProvider }