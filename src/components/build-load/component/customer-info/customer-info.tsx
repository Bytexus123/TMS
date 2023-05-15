import React from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import { ContactStatus, CustomerStatus } from "./customer";
import AddNewPageCustomer from "./add-new-customer-page";

const CustomerInfo = () => {
  return (
    <>
      <div className="justify-content-between d-flex">
        <h5 className="fw-bold">Customer Information</h5>
        <AddNewPageCustomer />
      </div>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label for="exampleSelect">Customer</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Type Customer Name</option>
                {Object.values(CustomerStatus).map((key) => {
                  if (typeof key === "number") {
                    return <option value={key}>{CustomerStatus[key]}</option>;
                  } else {
                    return null;
                  }
                })}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Name</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Type Contact Name</option>
                {Object.values(ContactStatus).map((key) => {
                  if (typeof key === "number") {
                    return <option value={key}>{ContactStatus[key]}</option>;
                  } else {
                    return null;
                  }
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Email</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Phone</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Ext</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Customer Ref No.</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Address</Label>
              <Input id="exampleText" name="text" type="textarea" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Docket Number</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>USDOT Number</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Credit Limit</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Row>
            <Col sm={4}>
              <FormGroup>
                <Label>Available Credit</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Notes</Label>
              <Input id="exampleText" name="text" type="textarea" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomerInfo;
