import React from 'React';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/login" >Login</Link></li>
                                <li><Link to="/dashboard" >Dasboard</Link></li>
                                
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/login" component={Login} />
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