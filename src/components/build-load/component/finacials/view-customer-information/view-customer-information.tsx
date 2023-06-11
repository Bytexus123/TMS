import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";

const ViewCustomerInformation = (args: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <section>
      <Button className="mb-3" onClick={toggle}>
        View Customer Information
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage modal-header">
          View Customer Information
        </ModalHeader>
        <ModalBody className="px-4">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <Table responsive size="sm">
                      <thead className="small">
                        <tr>
                          <th>#</th>
                          <th> Document Name </th>
                          <th>Upload Source </th>
                          <th>Upload Date </th>
                          <th> Description</th>
                          <th> Attached to </th>
                          <th>Document Type </th>
                          <th>Status </th>
                        </tr>
                      </thead>
                     
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default ViewCustomerInformation;
