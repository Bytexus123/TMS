import React from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import {
  CommodityStatus,
  EquipmentLengthStatus,
  EquipmentTypeStatus,
  LoadType,
  TruckStatus,
} from "./load";

const LoadBasic = () => {
  return (
    <>
      <h5 className="fw-bold">Load Information</h5>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label for="exampleSelect">Load status</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Select...</option>
                {Object.values(LoadType).map((key) => {
                  if (typeof key === "number") {
                    return <option value={key}>{LoadType[key]}</option>;
                  } else {
                    return null;
                  }
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label for="exampleSelect">Branch</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Truck status</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Select...</option>
                {Object.values(TruckStatus).map((key) => {
                  if (typeof key === "number") {
                    return <option value={key}>{TruckStatus[key]}</option>;
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
              <Label>Loan Reference Id/Number</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Weight</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Declared Loan Value</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Commodity</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Select...</option>
                {Object.values(CommodityStatus).map((key) => {
                  if (typeof key === "number") {
                    return <option value={key}>{CommodityStatus[key]}</option>;
                  } else {
                    return null;
                  }
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup className="btn-group">
              <Label>Load Size</Label>
              <Input name="radio2" type="radio" checked />
              <Label>Full Load</Label>
              <Input name="radio2" type="radio" />
              <Label>Partial Load</Label>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup className="btn-group">
              <Label>New or Used Goods</Label>
              <Input name="radio1" type="radio" checked />
              <Label>New</Label>
              <Input name="radio1" type="radio" />
              <Label>Used</Label>
            </FormGroup>
          </Col>
        </Row>
        <h3>Equipment Information</h3>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Equipment Type</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Select...</option>
                {Object.values(EquipmentTypeStatus).map((key) => {
                  if (typeof key === "number") {
                    return (
                      <option value={key}>{EquipmentTypeStatus[key]}</option>
                    );
                  } else {
                    return null;
                  }
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Intermodal/Dray Container Number</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Equipment Length</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <option value="">Select...</option>
                {Object.values(EquipmentLengthStatus).map((key) => {
                  if (typeof key === "number") {
                    return (
                      <option value={key}>{EquipmentLengthStatus[key]}</option>
                    );
                  } else {
                    return null;
                  }
                })}
              </Input>{" "}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Temprature</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Last Free Day</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <h3>Load Notes</h3>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Public Load Note</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Private Load Note</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Load Posting Notes/Comments</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoadBasic;
