import React from 'React';
import { Redirect, withRouter, Route } from "react-router-dom";

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
  
const AuthButton = withRouter(
    ({ history }) =>
      fakeAuth.isAuthenticated ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>You are not logged in.</p>
      )
);

function PrivateRoute({ component: Component, ...rest }) {
    
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
    
}

export default PrivateRoute;