import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const navigate = useHistory()

	const handleLogout = () => {
		setUser(null)
		navigate('/login')
	}

	return (
		<AuthContext.Provider value={{ user, setUser, handleLogout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext