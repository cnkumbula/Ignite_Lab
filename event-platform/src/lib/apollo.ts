import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({

    uri: 'https://api-us-west-2.graphcms.com/v2/cl52j13j7295p01um4b0dfyyv/master',
    cache: new InMemoryCache()
});