import React from "react";
import { Login, ForgetPassword } from "./components/login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/forgetpassword" component={ForgetPassword} />
      </Switch>
    </>
  );
}

export default App;
