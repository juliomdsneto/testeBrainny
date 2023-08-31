import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'http://test.frontend.api.brainny.cc/graphql',

});

const authLink = setContext((_, { headers }) => {

	const user = JSON.parse(localStorage.getItem('@pontogo'));
	const token = user?.jwt;



	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : "",
		}
	}
});


const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});


export default client;