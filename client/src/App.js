import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Private from "./routes/Private";
import PrivateRoute from "./Components/PrivateRoute";
import EmailTarget from "./routes/EmailTarget";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Private} />
          <Route path="/verify/:uuid" component={EmailTarget} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
