import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { TreeSelect } from "antd";
import { Commoditystatus, EquipmentLengthStatus, Equipmentstatus, Loadstatus, Truckstatus } from "../../../../packages/tms-objects";

const LoadBasic = () => {
  return (
    <>
     
      <Container fluid>
      <h5 className="fw-bold pb-2">Load Information</h5>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label for="exampleSelect">Load status</Label>
              <TreeSelect
                treeData={Loadstatus}
                showSearch
                allowClear
                value={selectedLoadStatusItems}
                onChange={(value: string[]) => {
                  setSelectedLoadStatusItems(value);
                }}
                onSelect={handleSelect}
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                placeholder="Please select"
                style={{ width: "100%" }}
              />
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
              <TreeSelect
                treeData={Truckstatus}
                showSearch
                allowClear
                value={selectedTruckStatusItems}
                onChange={(value: string[]) => {
                  setSelectedTruckStatusItems(value);
                }}
                onSelect={handleSelect}
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                placeholder="Please select"
                style={{ width: "100%" }}
              />
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
              <TreeSelect
                treeData={Commoditystatus}
                showSearch
                allowClear
                value={selectedCommodityItems}
                onChange={(value: string[]) => {
                  setSelectedCommodityItems(value);
                }}
                onSelect={handleSelect}
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                placeholder="Please select"
                style={{ width: "100%" }}
              />
            </FormGroup>
          </Col>
          <Col sm={4} className="d-flex align-items-center" >
        <p className="mb-0">Load Size </p>
            <ButtonGroup className="p-2">
            <Button
          
          
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Full Load 
        </Button>
        <Button
       
         
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Partial Load 
        </Button>
            </ButtonGroup>
           
          </Col>
          <Col sm={4} className="d-flex align-items-center" >
          <p className="mb-0" >New or Used Goods  </p>
            <ButtonGroup className="p-2"  >
            <Button
          
          color="primary"
          outline
          onClick={() => setR2Selected(3)}
          active={ r2Selected === 3}
        >
          New
        </Button>
        <Button
      
          color="primary"
          outline
          onClick={() => setR2Selected(4)}
          active={r2Selected === 4}
        >
          Used
        </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <h5 className="fw-bold pb-2">Equipment Information</h5>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Equipment Type</Label>
              <TreeSelect
                treeData={Equipmentstatus}
                showSearch
                allowClear
                value={selectedEquipmentStatusItems}
                onChange={(value: string[]) => {
                  setSelectedEquipmentStatusItems(value);
                }}
                onSelect={handleSelect}
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                placeholder="Please select"
                style={{ width: "100%" }}
              />
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
              <TreeSelect
                treeData={EquipmentLengthStatus}
                showSearch
                allowClear
                value={selectedEquipmentLengthStatusItems}
                onChange={(value: string[]) => {
                  setSelectedEquipmentLengthStatusItems(value);
                }}
                onSelect={handleSelect}
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                placeholder="Please select"
                style={{ width: "100%" }}
              />
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
        <h5 className="fw-bold pb-2">Load Notes</h5>
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
