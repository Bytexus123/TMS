import React from "react";
import { Button, Col, Container, Row, Table } from "reactstrap";

const Finacial = () => {
  return (
    <>
      <h5 className="fw-bold">Finacial</h5>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <h5 className="fw-bold my-3">Incomes</h5>
            <div className="px-3">
              <Table>
                <tbody>
                  <tr>
                    <th>Total Income</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Average Income</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Average Rate</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Average Quantity</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Max. rate</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Min. rate</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th className="invisible">N/A</th>
                    <td className="invisible">N/A</td>
                  </tr>
                  <tr>
                    <th>Gross Profit/Loss Amount</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Gross Profit/Loss %</th>
                    <td>---</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Button outline color="secondary">
              Add Income Line Item
            </Button>
          </Col>
          <Col sm={6}>
            <h5 className="fw-bold my-3">Expenses</h5>
            <div className="px-3">
              <Table>
                <tbody>
                  <tr>
                    <th>Total Expenses</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Average Expenses</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Average Rate</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Average Quantity</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Max. rate</th>
                    <td>---</td>
                  </tr>
                  <tr>
                    <th>Min. rate</th>
                    <td>---</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Button className="d-block fw-bold" color="link">
              View Customer Info.
            </Button>
            <Button className="d-block fw-bold" color="link">
              View Invoice
            </Button>
            <Button outline className="mt-4" color="secondary">
              Add Expense Line Item
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Finacial;
