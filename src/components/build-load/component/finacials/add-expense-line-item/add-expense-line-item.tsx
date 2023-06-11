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
import { Select, TreeSelect } from "antd";
import {
  EspenseCategoryFlateStatus,
  EspenseIncomeandPayableCategory,
} from "../../../../../packages/tms-objects";

const AddExpenseLineItem = (args: any) => {
  const [modal, setModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggle = () => setModal(!modal);

  const handleChange = (value: string[]) => {
    setSelectedItems(value);
  };

  const handleSelect = (value: string, node: any) => {
    console.log("Selected:", value);
    console.log("Node:", node);
  };

  return (
    <section>
      <Button onClick={toggle}>Add Expense Line Item</Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} className="headerAddPage">
          Add Expense Line Item
        </ModalHeader>
        <ModalBody className="px-4">
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <FormGroup>
                  <Label for="PayableTo">Payable To </Label>
                  <Select
                    showSearch
                    placeholder="Select Payable To"
                    style={{ width: "100%" }}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={EspenseIncomeandPayableCategory}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Select Category</Label>
                  <TreeSelect
                    treeData={EspenseCategoryFlateStatus}
                    showSearch
                    allowClear
                    value={selectedItems}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    showCheckedStrategy={TreeSelect.SHOW_CHILD}
                    placeholder="Please select"
                    style={{ width: "100%" }}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Label for="Rate">Rate</Label>
                <Input id="Rate" name="Rate" type="text" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Label for="Quantity">Quantity</Label>
                <Input id="Quantity" name="Quantity" type="text" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Label for="Total">Total</Label>
                <Input id="Total" name="Total" type="text" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Label for="Note">Note/Description</Label>
                <Input id="Note" name="Note" type="text" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col className="d-flex justify-content-end me-2 " md={12}>
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

export default AddExpenseLineItem;
