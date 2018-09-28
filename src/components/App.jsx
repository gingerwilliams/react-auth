import React from 'React';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Dash from './Dashboard';


class App extends React.Component {
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

                        <Route exact path="/" component={Home} />
                        <Route exact path="/dashboard" component={Dash} />
                        <Route exact path="/login" component={Login} />
                        
                    </div>
                </Router>

                

                

                <footer>
                    <p>footer</p>
                </footer>
                
            </div>
        )
    }
}

export default App;