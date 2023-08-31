import { useMutation } from '@apollo/client';
import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../graphql/mutations';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	let userData = localStorage.getItem("@pontogo");
	userData = userData ? JSON.parse(localStorage.getItem("@pontogo")) : null;


	const [user, setUser] = useState(userData);
	const navigate = useHistory();

	const [login] = useMutation(LOGIN);

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