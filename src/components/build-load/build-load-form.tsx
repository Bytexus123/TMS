import React, { useState } from "react";
import {
  CarrierAssetInfo,
  CustomerInfo,
  EditStops,
  Finacial,
  LoadBasic,
} from "./component";
import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
// import NavigationBar from "../navigation-bar";

interface BuildLoadFormProps {
  tabTitles: string[];
  children?: any[] | JSX.Element | JSX.Element[];
  tabActive?: number;
  steps: string[];
}

const BuildLoadForm = ({ tabTitles, children, steps }: BuildLoadFormProps) => {
  children = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveTab((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="content loads-section">
        <Container fluid className=" py-3 ">
          <Row>
            <Col sm={3}>
              <Nav tabs pills vertical className="border-bottom-0">
                {tabTitles.map((tabTitle, index) => (
                  <NavItem className="mb-2" key={index}>
                    <NavLink
                      className={`text-dark bg-light opacity-50 py-4 cursor-pointer ${
                        activeTab === index
                          ? "active opacity-100 fw-bold"
                          : "fw-semibold"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {tabTitle}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col sm={9} className="ps-0" style={{ zIndex: 1 }}>
              <Container fluid className="bg-light rounded">
                <Row>
                  <Col className="p-4">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={0}>
                        <LoadBasic />
                      </TabPane>
                      <TabPane tabId={1}>
                        <CustomerInfo />
                      </TabPane>
                      <TabPane tabId={2}>
                        <CarrierAssetInfo />
                      </TabPane>
                      <TabPane tabId={3}>
                        <EditStops />
                      </TabPane>
                      <TabPane tabId={4}>
                        <Finacial />
                      </TabPane>
                    </TabContent>
                    <Row className="button-container">
                      <Col>
                        {activeTab === 0 ? null : (
                          <Button onClick={handleBack}>Back</Button>
                        )}
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Button className="me-3">Save Draft</Button>
                        {activeTab === steps.length - 1 ? (
                          <Button onClick={() => handleSubmit}>Submit</Button>
                        ) : (
                          <Button onClick={handleNext}>Next</Button>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BuildLoadForm;
