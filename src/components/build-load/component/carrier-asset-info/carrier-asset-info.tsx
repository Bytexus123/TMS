import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const CarrierAssetInfo = () => {
  const [open, setOpen] = useState(0);
  return (
    <>
      <h3>Carrier Asset Information</h3>
      <p>Please select one of the following options:</p>
      <Form>
        <FormGroup check>
          <Input
            name="radio"
            type="radio"
            onChange={() => {
              setOpen(1);
            }}
          />
          <Label check>
            I am using my own asset/driver as the carrier for this load.
          </Label>
        </FormGroup>
        {open == 1 && (
          <Container fluid>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Carrier</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Docket No.</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>USDOT Number</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Address</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Primary Contact</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Contact Email</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
            </Row>
            <p>Driver and Equipment Information for this Load</p>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Driver</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Overall Load Length</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Overall Load Width</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Power Unit</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Overall Load Height</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
              <Col sm={3}>
                <FormGroup>
                  <Label>Total Gross Vehicle Weight</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Trailer</Label>
                  <Input id="exampleText" name="text" type="text" bsSize="sm" />
                </FormGroup>
              </Col>
            </Row>
          </Container>
        )}
        <FormGroup check>
          <Input
            name="radio"
            type="radio"
            onChange={() => {
              setOpen(2);
            }}
          />
          <Label check>I am using an outside carrier for this load.</Label>
        </FormGroup>
        {open == 2 && (
          <Container fluid>
            <Row>
              <Col sm={3}>
                <FormGroup>
                  <Label>Carrier</Label>
                  <InputGroup>
                    <Input />
                    <InputGroupText>Search a Carrier list</InputGroupText>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Container>
        )}
      </Form>
    </>
  );
};

export default CarrierAssetInfo;
