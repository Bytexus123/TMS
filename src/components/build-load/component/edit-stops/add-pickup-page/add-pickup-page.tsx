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
import { GrFormAdd } from "react-icons/gr";
import { MdSave } from "react-icons/md";
import AddNewLocation from "../../customer-info/add-new-Locations";
import { Select } from "antd";
import { PickupLocations } from "../../../../../packages/tms-objects";

const AddPickupPage = (args: any) => {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <section>
      <Button onClick={toggle}>Add Pick Up</Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage ">
          Add Pickup
        </ModalHeader>
        <ModalBody className="px-4">
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Stop Locations </Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col className="d-flex align-items-end" md={6}>
                <FormGroup>
                  <Button onClick={toggleNested}>
                    <GrFormAdd size={20} />
                    Create New Location
                    <Modal
                      isOpen={nestedModal}
                      toggle={toggleNested}
                      onClosed={closeAll ? toggle : undefined}
                    >
                      <AddNewLocation />
                    </Modal>
                  </Button>
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <FormGroup>
                  <Label for="stopaction"> Stop Action </Label>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select a Location"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={PickupLocations}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="cargo"> Cargo Description </Label>
                  <Input id="cargo" name="name" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="ref"> Ref. Numbers </Label>
                  <Input id="Ref" name="name" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <FormGroup>
                  <Label for="schedulaedate"> Schedule Date</Label>
                  <Input id="schedulaedate" name="name" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="scheduledate"> Schedule Time </Label>
                  <Input id="scheduletime" name="name" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={4}>
                <FormGroup>
                  <Label for="stopaction">Actual Departure Date/Time </Label>
                  <Input id="stopaction" name="name" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="cargo"> Actual Arrival Date/Time </Label>
                  <Input id="cargo" name="name" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="ref"> Total Unloading Time(min)</Label>
                  <Input id="Ref" name="name" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-8">
              <Col md={12}>
                <FormGroup>
                  <Label for="PrivateNote">Driver Instaructions </Label>
                  <Input id="PrivateNote" name="PrivateNote" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {/* <Col className="d-flex " md={4}>
                <Button>
                 
                  Add Another
                </Button>
              </Col> */}
              <Col className="d-flex justify-content-end " md={12}>
                <Button className="me-3">
                  <MdSave /> Add Another
                </Button>
                <Button>
                  <MdSave /> Save Stop
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default AddPickupPage;
