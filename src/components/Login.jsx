import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};


class Login extends React.Component{

    state = { redirectToReferrer: false };
    

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ 
                redirectToReferrer: true
            });
        });
    };

    render(){
       
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        // let from = this.props.location.state;
        let { redirectToReferrer } = this.state;
    
        console.log(from);
        if (redirectToReferrer){
            console.log("true");
            return <Redirect to={from} />
        }
    
        return (
          <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={this.login}>Log in</button>
          </div>
        );
    }

}

export default withRouter(Login);