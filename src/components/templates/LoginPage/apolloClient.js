
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://test.frontend.api.brainny.cc/graphql',
	cache: new InMemoryCache(),
});

export default client;
