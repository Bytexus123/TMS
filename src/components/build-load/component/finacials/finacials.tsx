import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import AddExpenseLineItem from "./add-expense-line-item";
import AddIncomeLineItem from "./add-income-line-item";
import ViewCustomerInformation from "./view-customer-information";
import ViewInvoices from "./view-invoices";

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
            <Col outline color="secondary">
              <AddIncomeLineItem />
            </Col>
          </Col>
          <Col sm={6}>
            <h5 className="fw-bold my-3">Expenses</h5>
            <div className="px-3 ">
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
            <Col className="d-block fw-bold " color="link">
              <ViewCustomerInformation />
            </Col>
            <Col className="d-block fw-bold" color="link">
              <ViewInvoices />
            </Col>
            <Col outline className="mt-4" color="secondary">
              <AddExpenseLineItem />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Finacial;
