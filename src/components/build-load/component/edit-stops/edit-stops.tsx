import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";

const EditStops = () => {
  return (
    <>
      <Form>
        <h3>Initial Carrier/Asset Info</h3>
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
                <Label>Driver</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
            <Col sm={3}>
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
            <Col sm={3}>A</Col>
            <Col sm={3}>B</Col>
            <Col sm={3}>C</Col>
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
          <div className="gap-2 d-md-flex">
            <Button type="submit" color="primary">
              Save as Draft
            </Button>
            <Button type="submit" color="primary">
              Next Step
            </Button>
          </div>
        </Container>
      </Form>
    </>
  );
};

export default EditStops;
