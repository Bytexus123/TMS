<<<<<<< HEAD
import React, { Suspense, useState } from "react";
import { Login, ForgetPassword } from "./components/login";
import { Redirect, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import { LoginContext, PrivateRoute } from "./components/private-routes";
import { DashboardPage } from "./components/dashboard-page";
import NavigationBar from "./components/navigation-bar";
import BuildLoadForm from "./components/build-load";
import RegistrationForm from "./components/ragistration-form";
=======
import React from 'react';
>>>>>>> e6987df2e8f094860162aaf86cd14c59a26a925b



import RegistrationForm from './components/registration-page';
import LoadPageMAnagement from './components/load-page';
import LoadFormPage from './components/load-form-page';
import AddNewPageCustomer from './components/add-new-customer-page';
import AddPickupPage from './components/add-pickup-page/add-pickup-page';
import AddDiliveryPage from './components/add-dilivery-page/add-delivery-page';
import AddOtherStop from './components/add-other-stop/add-other-stop';
import AddNewLocation from './components/add-new-Locations/add-new-locations';


function App() {
  return (
<<<<<<< HEAD
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
              <BuildLoadForm tabActive={tabActive} tabTitles={[
            "Load Basic",
            "Customer Info",
            "Carrier Asset Info",
            "Edit Stops",
            "Finacial",
          ]}
          steps={["0", "1", "2", "3", "4"]}/>
            </Route>
          </Switch>
        </LoginContext.Provider>
      </Suspense>
    </>
=======
    <div className="App">
     <LoadPageMAnagement/>
      <LoadFormPage/> 
      <AddNewPageCustomer/>
    <AddPickupPage/>
    <AddDiliveryPage/>
    <AddOtherStop/>
    <AddNewLocation/>
    </div>
>>>>>>> e6987df2e8f094860162aaf86cd14c59a26a925b
  );
}

export default App;
