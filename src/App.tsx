import React from 'react';



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
    <div className="App">
     <LoadPageMAnagement/>
      <LoadFormPage/> 
      <AddNewPageCustomer/>
    <AddPickupPage/>
    <AddDiliveryPage/>
    <AddOtherStop/>
    <AddNewLocation/>
    </div>
  );
}

export default App;
