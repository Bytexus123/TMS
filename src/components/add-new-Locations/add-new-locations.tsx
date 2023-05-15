import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/global.scss";
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
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { AiOutlineFileSearch } from "react-icons/ai";
import {MdSave} from "react-icons/md";
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
                
            </Row>
           
            
            <Row className="mb-3">
              <Col md={6}>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                 
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
                 
                />
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
                     
                    />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input
                    id="Telephone"
                    name="Telephone"
                    type="number"
                   
                  />
                </FormGroup>
                </Col>
            </Row>
            <Row >
              <Col md={6}>
                <FormGroup>
                <Label for="Location"> Location Class </Label>
                    <Input
                      id="Location"
                      name="Extension"
                      type="text"
                     
                    />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input
                    id="Telephone"
                    name="Telephone"
                    type="number"
                   
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
                     
                    />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Telephone">Telephone</Label>
                  <Input
                    id="Telephone"
                    name="Telephone"
                    type="number"
                   
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

export default AddNewLocation;
