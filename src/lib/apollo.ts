import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocmmjs1s6s01z7293l6yqm/master',
    cache: new InMemoryCache()
})