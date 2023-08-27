import { Route, BrowserRouter as Router } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';

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
            <Route
                path="/dashboard"
                exact
                render={(props) => <DashBoard {...props} />}
            />
        </Router>
    );
}

export default Routes;
