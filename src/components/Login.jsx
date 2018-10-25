import React from 'react';

class Login extends React.Component{

    login(e) {
        e.preventDefault();

        console.log('submit');
    }

   

    render(){
        return(
            <div>
                <h1>Login</h1>
            
            </div>
        )
    }

}

export default Login;