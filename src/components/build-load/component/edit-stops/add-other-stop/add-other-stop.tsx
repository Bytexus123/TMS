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

const AddOtherStop = (args: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <section>
      <Button  onClick={toggle}>
        Add Other Stop
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage">
          Add Other Stop
        </ModalHeader>
        <ModalBody className="px-4">
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect"> Stop Location </Label>
                  <Input id="exampleSelect" name="select" type="select">
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
                  <Button className="mt-4 p-2">
                    {" "}
                    <GrFormAdd size={22} />
                    Create New Location{" "}
                  </Button>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {/* <Col className="d-flex " md={4}>
                <Button>
                 
                  Add Another
                </Button>
              </Col> */}
              <Col className="d-flex justify-content-end" md={12}>
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

export default AddOtherStop;
