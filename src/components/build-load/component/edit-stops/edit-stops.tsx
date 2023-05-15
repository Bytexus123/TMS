import React from "react";
import {
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import AddDiliveryPage from "./add-dilivery-page";
import AddPickupPage from "./add-pickup-page";
import AddOtherStop from "./add-other-stop";

const EditStops = () => {
  return (
    <>
      <h5 className="fw-bold">Initial Carrier/Asset Info</h5>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Carrier</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Driver</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Power Unit Trailer</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <h2>Stops</h2>
          </Col>
          <Col sm={3}>
            <AddPickupPage />
          </Col>
          <Col sm={3}>
            <AddDiliveryPage />
          </Col>
          <Col sm={3}>
            <AddOtherStop />
          </Col>
        </Row>
        <Table striped responsive hover className="border">
          <thead>
            <tr>
              <th>#</th>
              <th>Stop Order</th>
              <th>Action(s)</th>
              <th>Scheduled Date/Time</th>
              <th>Actual Date/Time</th>
              <th>Location</th>
              <th>Address</th>
              <th>Cargo</th>
              <th>Reference#</th>
              <th>Show On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
              <td>wshushu</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EditStops;
