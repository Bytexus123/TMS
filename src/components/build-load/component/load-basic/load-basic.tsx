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
import {
  CommodityStatusDry,
  CommodityStatusHazardous,
  CommodityStatusHighValue,
  CommodityStatusLiquid,
  CommodityStatusLiveStock,
  CommodityStatusTemp,
  EquipmentLengthStatusLarge,
  EquipmentLengthStatusMedium,
  EquipmentLengthStatusSmall,
  EquipmentTypeStatusDryVan,
  EquipmentTypeStatusFlatbed,
  EquipmentTypeStatusFlexible,
  EquipmentTypeStatusMisc,
  EquipmentTypeStatusSpecial,
  EquipmentTypeStatusTemp,
  LoadTypeActiveLoad,
  LoadTypeLoadComplated,
  LoadTypePlanning,
  TruckStatusAfterYourLoad,
  TruckStatusBeforeYourLoad,
  TruckStatusCarrierSetup,
  TruckStatusDuringYourLoad,
} from "./load";

const LoadBasic = () => {
  const [ rSelected , setRSelected] = useState(Number);
  const [ r2Selected , setR2Selected] = useState(Number);
  return (
    <>
     
      <Container fluid>
      <h5 className="fw-bold pb-2">Load Information</h5>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label for="exampleSelect">Load status</Label>
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <optgroup label="Planning">
                  {Object.values(LoadTypePlanning).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>{LoadTypePlanning[key]}</option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="ActiveLoad">
                  {Object.values(LoadTypeActiveLoad).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>{LoadTypeActiveLoad[key]}</option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="LaodCompleted">
                  {Object.values(LoadTypeLoadComplated).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {LoadTypeLoadComplated[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
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
                <optgroup label="Carrier Setup">
                  {Object.values(TruckStatusCarrierSetup).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {TruckStatusCarrierSetup[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Before Your Load">
                  {Object.values(TruckStatusBeforeYourLoad).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {TruckStatusBeforeYourLoad[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="During Your Load">
                  {Object.values(TruckStatusDuringYourLoad).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {TruckStatusDuringYourLoad[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="After Your Load">
                  {Object.values(TruckStatusAfterYourLoad).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {TruckStatusAfterYourLoad[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
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
                <optgroup label="Dry">
                  {Object.values(CommodityStatusDry).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>{CommodityStatusDry[key]}</option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Hazardous">
                  {Object.values(CommodityStatusHazardous).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {CommodityStatusHazardous[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="High Value">
                  {Object.values(CommodityStatusHighValue).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {CommodityStatusHighValue[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Liquid">
                  {Object.values(CommodityStatusLiquid).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {CommodityStatusLiquid[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="LiveStock">
                  {Object.values(CommodityStatusLiveStock).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {CommodityStatusLiveStock[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Temp. Controlled">
                  {Object.values(CommodityStatusTemp).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>{CommodityStatusTemp[key]}</option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
              </Input>
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
              <Input id="exampleSelect" name="select" type="select" bsSize="sm">
                <optgroup label="Dry Van">
                  {Object.values(EquipmentTypeStatusDryVan).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentTypeStatusDryVan[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Temp Control">
                  {Object.values(EquipmentTypeStatusTemp).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentTypeStatusTemp[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Flatbed">
                  {Object.values(EquipmentTypeStatusFlatbed).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentTypeStatusFlatbed[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Specialized">
                  {Object.values(EquipmentTypeStatusSpecial).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentTypeStatusSpecial[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Flexible Type">
                  {Object.values(EquipmentTypeStatusFlexible).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentTypeStatusFlexible[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Misc.">
                  {Object.values(EquipmentTypeStatusMisc).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentTypeStatusMisc[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
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
                <optgroup label="Small Truck">
                  {Object.values(EquipmentLengthStatusSmall).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentLengthStatusSmall[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Medium Truck">
                  {Object.values(EquipmentLengthStatusMedium).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentLengthStatusMedium[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
                <optgroup label="Large Truck">
                  {Object.values(EquipmentLengthStatusLarge).map((key) => {
                    if (typeof key === "number") {
                      return (
                        <option value={key}>
                          {EquipmentLengthStatusLarge[key]}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </optgroup>
              </Input>
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
