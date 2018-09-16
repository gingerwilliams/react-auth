import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form action="#">
                    <input name="username" type="text" placeholder="username"/>
                    <input name="password" type="password" placeholder="password"/>
                    <button id="submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Login;