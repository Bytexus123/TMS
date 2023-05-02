import React from "react";
import GridPage from "./grid-page";

const DashboardPage = () => {
  return (
    <>
      <div className="grid-container py-3">
        <div className="grid-column">
          <GridPage
            variant="large"
            name="Build a Load"
            image="build-load"
            link="/build-load"
          ></GridPage>
          <GridPage
            variant="normal"
            name="Rates"
            image="rates"
            link="/dd"
          ></GridPage>
          <GridPage
            variant="normal"
            name="Accounting"
            image="accounting"
          ></GridPage>
        </div>
        <div className="grid-column">
          <GridPage variant="wide" name="Loads" image="loads"></GridPage>
          <GridPage
            variant="normal"
            name="LTL Orders"
            image="ltl-orders"
          ></GridPage>
          <GridPage
            variant="normal"
            name="EDI / Tenders"
            image="edi-tenders"
          ></GridPage>
          <GridPage
            variant="wide"
            name="Doc Management"
            image="doc-mgmt"
          ></GridPage>
        </div>
        <div className="grid-column">
          <GridPage variant="wide" name="Customers" image="cust"></GridPage>
          <GridPage variant="wide" name="Assets" image="assets"></GridPage>
          <GridPage variant="normal" name="Report" image="reports"></GridPage>
          <GridPage variant="normal" name="Learn" image="learn"></GridPage>
        </div>
        <div className="grid-column lastColumn">
          <GridPage
            variant="normal"
            name="Carriers"
            image="carriers"
          ></GridPage>
          <GridPage
            variant="normal"
            name="Location"
            image="location"
          ></GridPage>
          <GridPage variant="small" name="Help" image="help"></GridPage>
          <GridPage variant="small" name="Settings" image="setting"></GridPage>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
