import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri : 'https://api-sa-east-1.graphcms.com/v2/cl4si47k825fr01wb5ynbhpji/master',
    cache: new InMemoryCache()
})