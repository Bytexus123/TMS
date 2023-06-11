import React, { useState } from "react";
import {
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
  const [selectedLoadStatusItems, setSelectedLoadStatusItems] = useState<string[]>([]);
  const [selectedCommodityItems, setSelectedCommodityItems] = useState<string[]>([]);
  const [selectedEquipmentStatusItems, setSelectedEquipmentStatusItems] =useState<string[]>([]);
  const [selectedEquipmentLengthStatusItems,setSelectedEquipmentLengthStatusItems] = useState<string[]>([]);
  const [selectedTruckStatusItems, setSelectedTruckStatusItems] = useState<string[]>([]);

  const handleSelect = (value: string, node: any) => {
    console.log("Selected:", value);
    console.log("Node:", node);
  };

  return (
    <>
      <h5 className="fw-bold">Load Information</h5>
      <Container fluid>
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
          <Col sm={4}>
            <FormGroup>
              <Label>Load Size</Label>
              <Input name="radio2" type="radio" />
              <Label>Full Load</Label>
              <Input name="radio2" type="radio" />
              <Label>Partial Load</Label>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>New or Used Goods</Label>
              <ButtonGroup>
                <Input name="radio1" type="radio" />
                <Label>New</Label>
                <Input name="radio1" type="radio" />
                <Label>Used</Label>
              </ButtonGroup>
            </FormGroup>
          </Col>
        </Row>
        <h3>Equipment Information</h3>
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
