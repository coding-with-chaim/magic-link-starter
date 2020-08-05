import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({component: Component, ...rest}) {
    function renderComponent(props) {
        const token = localStorage.getItem("token");
        if (token) {
            return (
                <Component {...props} />
            )
        }

        return (
            <Redirect to={{pathname: "/login"}} />
        )
    }

    return (
        <Route {...rest} render={renderComponent} />
    );
}

export default PrivateRoute;