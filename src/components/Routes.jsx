import React from 'React';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';


class Routes extends React.Component {
    render(){
        return(
            
            <div>
                <header>
                    <h1>React Auth</h1>
                    <p>Authentication &amp; Session Cookies</p>
                </header>

                <Router>
                    <div>
                        <nav>
                            <ul>
                                {/* public */}
                                <li><Link to="/" >Home</Link></li>
                                {/* Route path protected */}
                                <li><Link to="/dashboard" >Dashboard</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            {/* Route path public */}
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            {/* Route path protected */}
                            <PrivateRoute path="/dashboard" component={Dashboard} />
                            
                        </Switch>
                    </div>
                </Router>

                <footer>
                    <p>footer</p>
                </footer>
                
            </div>
        )
    }
}

export default Routes;