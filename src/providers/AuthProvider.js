import { useMutation } from '@apollo/client';
import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../graphql/mutations';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const navigate = useHistory();

	const [login] = useMutation(LOGIN);
	// const login = (email, password) => {
	// 	return loginMutation({
	// 		variables: {
	// 			input: {
	// 				identifier: email, password

	// 			}
	// 		}
	// 	}).then(data => setUser(data))
	// }

	const handleLogout = () => {
		setUser(null);
		navigate('/login');
	}

	return (
		<AuthContext.Provider value={{ user, setUser, handleLogout, login }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext;