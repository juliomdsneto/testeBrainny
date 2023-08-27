import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // Importe a página de login

const Routes = () => {
    return (
        <Router>
            <Route
                path="/"
                exact
                render={(props) => <Home {...props} />}
            />
            <Route
                path="/login"
                exact
                render={(props) => <Login {...props} />}
            />
        </Router>
    );
}

export default Routes;
