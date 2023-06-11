import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { AiOutlineFileSearch } from "react-icons/ai";
import {MdSave} from "react-icons/md";
const AddNewPageCustomer = (args: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <section>
      <Button onClick={toggle}>
        Add New Customer
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage  modal-header">
          Add New Customer
        </ModalHeader>
        <ModalBody className="px-4">
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <InputGroup>
                  <Input
                    name="search"
                    type="text"
                    placeholder="Search for Customer"
                  />
                  <Button>
                    <AiOutlineFileSearch className="me-2" />
                    Search
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" Enter the Name"
                ></Input>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Label for="address"> Address </Label>
                <Input
                  id="address"
                  name="name"
                  type="text"
                  placeholder="Enter Address"
                />
              </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input id="email" type="text" name="email" placeholder="Enter Email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input
                    id="Telephone"
                    name="Telephone"
                    type="number"
                    placeholder="Enter Telephone Number"
                  />
                </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col md={6}>
                  <FormGroup>
                    <Label for="Extension">Extension</Label>
                    <Input
                      id="Extension"
                      name="Extension"
                      type="text"
                      placeholder="Enter Extension"
                    />
                  </FormGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={12}>
                  <FormGroup>
                    <Label for="PrivateNote">Private Note</Label>
                    <Input
                      id="PrivateNote"
                      name="PrivateNote"
                      type="text"
                      placeholder="Enter Note"
                    />
                  </FormGroup>
                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-end" md={12}>

                <Button  >
        <MdSave className="me-2 " />Save & Return
        </Button>
        </Col>
            </Row>
            
          </Form>
        </ModalBody>

      </Modal>
    </section>
  );
};

export default AddNewPageCustomer;
