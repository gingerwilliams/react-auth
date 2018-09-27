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
                
                    <input 
                        name="username" 
                        type="text" 
                        placeholder="username"
                        onChange={this.handleChange}
                    
                    />
                    <input 
                        name="password" 
                        type="password"
                        placeholder="password"
                        onChange={this.handleChange}
                    />
                    <button 
                        onClick={this.login} 
                        type="submit" 
                    >Submit</button>
                
            </div>
        )
    }

}

export default Login;