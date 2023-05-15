import React, { Suspense, useState } from "react";
import { Login, ForgetPassword } from "./components/login";
import { Redirect, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { LoginContext, PrivateRoute } from "./components/private-routes";
import { DashboardPage } from "./components/dashboard-page";
import NavigationBar from "./components/navigation-bar";
import BuildLoadForm from "./components/build-load";
import RegistrationForm from "./components/ragistration-form";
import LoadPageMAnagement from "./components/load-page";

function App({ tabActive }: any) {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(Cookies.get("loggedIn") || "false")
  );

  const setLogin = (data: boolean) => {
    const status = data.toString();
    Cookies.set("loggedIn", status);
    setIsLoggedIn(data);
  };
  return (
    <>
      <Suspense fallback="Loading...">
        <LoginContext.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            loading,
            setLoading,
          }}
        >
          <NavigationBar />
          <Switch>
            <PrivateRoute
              exact={true}
              path="/dashboard"
              component={DashboardPage}
            />
            <Route exact={true} path="/">
              {isLoggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login loginStatus={setLogin} />
              )}
            </Route>
            <Route path="/forgetpassword">
              <ForgetPassword />
            </Route>
            <Route path="/registration-form">
              <RegistrationForm />
            </Route>
            <Route path="/build-load">
              <BuildLoadForm
                tabActive={tabActive}
                tabTitles={[
                  "Load Basic",
                  "Customer Info",
                  "Carrier Asset Info",
                  "Edit Stops",
                  "Finacial",
                ]}
                steps={["0", "1", "2", "3", "4"]}
              />
            </Route>
            <Route path="/load-page">
              <LoadPageMAnagement
                tabActive={tabActive}
                tabTitles={[
                  "Active Loads",
                  "Planning Loads",
                  "Ready for Accounting Loads",
                  "Misc. Loads",
                  "All Loads",
                  "My Loads",
                  "Externally Posted Loads",
                ]}
              />
            </Route>
          </Switch>
        </LoginContext.Provider>
      </Suspense>
    </>
    // <div className="App">
    //  <LoadPageMAnagement/>
    //   <LoadFormPage/>
    //   <AddNewPageCustomer/>
    // <AddPickupPage/>
    // <AddDiliveryPage/>
    // <AddOtherStop/>
    // <AddNewLocation/>
    // </div>
  );
}

export default App;
