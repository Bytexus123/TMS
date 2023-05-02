import React, { FormEvent } from "react";
import {
  CarrierAssetInfo,
  CustomerInfo,
  EditStops,
  Finacial,
  LoadBasic,
} from "./component";
import { Stepper } from "../stepper/stepper";
import { Button, Form, TabPane } from "reactstrap";
import TabColumn from "../tab-panel";

interface BuildLoadFormProps {
  tabActive?: number;
}

const BuildLoadForm = ({ tabActive }: BuildLoadFormProps) => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    Stepper([
      <LoadBasic />,
      <CustomerInfo />,
      <CarrierAssetInfo />,
      <EditStops />,
      <Finacial />,
    ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
      <TabColumn tabTitles={["LoadBasic",'CustomerInfo','CarrierAssetInfo','EditStops','Finacial']} tabActive={tabActive}>
        <TabPane tabId={1}>
          <LoadBasic />
        </TabPane>
        <TabPane tabId={2}>
          <CustomerInfo />
        </TabPane>
        <TabPane tabId={3}>
          <CarrierAssetInfo />
        </TabPane>
        <TabPane tabId={4} >
          <EditStops />
        </TabPane>
        <TabPane tabId={5}>
          <Finacial />
        </TabPane>
      </TabColumn>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <Button type="button" onClick={back}>
              Prev
            </Button>
          )}
          <div className="gap-2 d-md-flex">
            <Button color="primary">Save as Draft</Button>
            <Button type="submit" color="primary">
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default BuildLoadForm;
