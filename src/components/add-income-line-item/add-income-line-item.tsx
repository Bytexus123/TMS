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

const AddIncomeLineItem = (args: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <section>
      <Button onClick={toggle}>
        Add Income Line Item
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage">
          Add Income Line Item
        </ModalHeader>
        <ModalBody className="px-4">
          <Form>
            <Row className="mb-3">
            <Col md={6}>
                <FormGroup>
                  <Label for="IncomeForm">Income Form </Label>
                  <Input id="IncomeForm" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Select Category </Label>
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
              <Label for="Rate">Rate </Label>
                  <Input id="Rate" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </Col>
            </Row>
            <Row className="mb-3">
            <Col md={6}>
              <Label for="Quantity">Quantity </Label>
                  <Input id="Quantity" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </Col>
            </Row>
            <Row>
            <Col md={6}>
              <Label for="Total">Total </Label>
                  <Input id="Total" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Label for="Note">Note/Description</Label>
                <Input id="Note" name="Note" type="text" />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-end" md={12}>
                <Button>
                  <MdSave className="me-2 " />
                  Save Pay Item
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default AddIncomeLineItem;
