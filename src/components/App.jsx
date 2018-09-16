import React from 'React';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';


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
                                <Link to="/" >Home</Link>
                                <Link to="/login" >Login</Link>
                            </ul>
                        </nav>

                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />

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