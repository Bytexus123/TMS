import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const LoadBasic = () => {
  return (
    <>
      <Form>
        <h3>Load Information</h3>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label for="exampleSelect">Load status</Label>
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
            <Col sm={3}>
              <FormGroup>
                <Label for="exampleSelect">Branch</Label>
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
            <Col sm={3}>
              <FormGroup>
                <Label>Truck status</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Loan Reference Id/Number</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Weight</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Declared Loan Value</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Commodity</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Load Size</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label for="exampleSelect">New or used goods</Label>
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
          <h3>Equipment Information</h3>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Equipment Type</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Intermodal/Dray Container Number</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Equipment Length</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Temprature</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Last Free Day</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
          <h3>Load Notes</h3>
          <Row>
            <Col sm={3}>
              <FormGroup>
                <Label>Public Load Note</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Private Load Note</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup>
                <Label>Load Posting Notes/Comments</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default LoadBasic;
