import React from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import AddNewPageCustomer from "./add-new-customer-page";
import { Select } from "antd";
import { ContactInfo, Customer } from "../../../../packages/tms-objects";

const CustomerInfo = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <>
      <div className="justify-content-between d-flex">
        <h5 className="fw-bold">Customer Information</h5>
        <AddNewPageCustomer />
      </div>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label for="exampleSelect">Customer</Label>
              <Select
                showSearch
                placeholder="Select a Customer"
                style={{ width: "100%" }}
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={Customer}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Name</Label>
              <Select
                showSearch
                placeholder="Select a Customer"
                style={{ width: "100%" }}
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={ContactInfo}
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Email</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Phone</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Contact Ext</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Customer Ref No.</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Address</Label>
              <Input id="exampleText" name="text" type="textarea" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Docket Number</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>USDOT Number</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Label>Credit Limit</Label>
              <Input id="exampleText" name="text" type="text" bsSize="sm" />
            </FormGroup>
          </Col>
          <Row>
            <Col sm={4}>
              <FormGroup>
                <Label>Available Credit</Label>
                <Input id="exampleText" name="text" type="text" bsSize="sm" />
              </FormGroup>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Label>Notes</Label>
              <Input id="exampleText" name="text" type="textarea" bsSize="sm" />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomerInfo;
