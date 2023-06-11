import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { MdSave } from "react-icons/md";
import { Select } from "antd";
import { LocationsClass } from "../../../../../packages/tms-objects";

const AddNewLocation = (args: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <section>
      <Button color="danger" onClick={toggle}>
        Add New Location
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage">
          Add New Customer
        </ModalHeader>
        <ModalBody className="px-4">
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Stop Locations</Label>
                  <Input type="text" name="stopLocations" id="stopLocations" />
                </FormGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text"></Input>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Label for="address"> Address</Label>
                <Input id="address" name="name" type="text" />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Extension">Extension</Label>
                  <Input id="Extension" name="Extension" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input id="Telephone" name="Telephone" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Location">Location Class</Label>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select Location Class"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={LocationsClass}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input id="Telephone" name="Telephone" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Extension">Extension</Label>
                  <Input id="Extension" name="Extension" type="text" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input id="Telephone" name="Telephone" type="text" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-end" md={12}>
                <Button>
                  <MdSave className="me-2 " />
                  Save & Return
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default AddNewLocation;
