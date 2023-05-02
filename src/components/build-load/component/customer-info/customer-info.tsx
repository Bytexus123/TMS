import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CustomerInfo = () => {
  return (
    <>
      <Form>
        <h3>Customer Information</h3>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label for="exampleSelect">Customer</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  bsSize="sm"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Contact Name</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Contact Email</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Contact Phone</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Contact Ext</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Customer Ref No.</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Address</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  bsSize="sm"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Docket Number</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>USDOT Number</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Credit Limit</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Available Credit</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Notes</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  bsSize="sm"
                />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default CustomerInfo;
