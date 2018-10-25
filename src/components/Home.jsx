import React, { Component } from 'react';
import App from './App';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h3>You are logged in!{' '}</h3>
            <button 
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
            >
                Log Out
            </button>
            
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
                <h3>ReactiveSearch Auth0 Example</h3>
                <h4>You are not logged in! Please login to continue.</h4>
                <button
                    style={{ cursor: 'pointer' }}
                    onClick={this.login}
                >
                    Log In
                </button>
                
              
              <p>This is the default HOME component. The APP component will only be visible once you authenticate.</p>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;