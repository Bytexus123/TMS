import React, { useState } from "react";
// import reactstrap css
import {
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Col,
  Container,
  Input,
  InputGroup,
  Button,
  Table,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/global.scss";
// import icons
import { TbListSearch } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";

const LoadPageMAnagement = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section>
      <Container fluid className="py-3">
        <Row>
          <Col md={2}>
            <div className="leftSection">
              <Nav tabs pills vertical className="border-bottom-0">
                <NavItem className="mb-2 p-0">
                  <NavLink
                    className={` text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "1" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("1")}
                  >
                    Active Loads
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2 p-0">
                  <NavLink
                    className={` text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "2" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("2")}
                  >
                    Planning Loads
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2 p-0">
                  <NavLink
                    className={` text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "3" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("3")}
                  >
                    Ready for Accounting Loads
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2 p-0">
                  <NavLink
                    className={`text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "4" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("4")}
                  >
                    Misc. Loads
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2 p-0 ">
                  <NavLink
                    className={`text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "5" ? "active  " : ""
                    }`}
                    onClick={() => setActiveTab("5")}
                  >
                    All Loads
                  </NavLink>
                </NavItem>

                <NavItem className="mb-2 p-0 ">
                  <NavLink
                    className={`text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "6" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("6")}
                  >
                    My Loads
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2 p-0 ">
                  <NavLink
                    className={`text-dark fw-bold border-0 p-3 tabPointer ${
                      activeTab === "7" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("7")}
                  >
                    Externally Posted Loads
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>

          <Col md={10}>
            <Container
              fluid
              className="bg-light rounded"
              style={{ minHeight: "600px" }}
            >
              <Row>
                <Col>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <div className="searchSection">
                        <Nav className="justify-content-between ">
                          <NavItem>
                            <InputGroup className="py-4">
                              <Input
                                name="search"
                                type="text"
                                placeholder="Search"
                              />
                              <Button>
                                <TbListSearch size={20} />
                              </Button>
                            </InputGroup>
                          </NavItem>
                          <NavItem className="py-4">
                            <Button outline>
                              <MdOutlinePostAdd size={20} /> Post Load
                            </Button>
                          </NavItem>
                        </Nav>
                      </div>
                      <div>
                        <Container fluid>
                          <Row>
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th>Last Contact </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Equipment</th>
                                        <th>Power Unit</th>
                                        <th>Trailer</th>
                                        <th>Distance</th>
                                        <th>weight</th>
                                        <th>Income</th>
                                        <th>Expenses</th>
                                        <th>Gross Profit/Loss</th>
                                        <th>Gross Profit/Loss%</th>
                                        <th>Reference</th>
                                        <th>Truck Status</th>
                                        <th>Branch</th>
                                        <th>Asset Group</th>
                                        <th>Container</th>
                                        <th>Last Free Day</th>
                                        <th>Created</th>
                                        <th>Tempreture</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> hello </td>
                                        </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>

                    <TabPane tabId="2">
                      <div>
                        <Container fluid>
                          <Row className="pt-4">
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th>Last Contact </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Equipment</th>
                                        <th>Power Unit</th>
                                        <th>Trailer</th>
                                        <th>Distance</th>
                                        <th>weight</th>
                                        <th>Income</th>
                                        <th>Expenses</th>
                                        <th>Gross Profit/Loss</th>
                                        <th>Gross Profit/Loss%</th>
                                        <th>Reference</th>
                                        <th>Truck Status</th>
                                        <th>Branch</th>
                                        <th>Asset Group</th>
                                        <th>Container</th>
                                        <th>Last Free Day</th>
                                        <th>Created</th>
                                        <th>Tempreture</th>
                                      </tr>
                                    </thead>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div>
                        <Container fluid>
                          <Row className="pt-4">
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Distance</th>
                                        <th>Income</th>
                                        <th>Expenses</th>
                                        <th>Gross Profit/Loss</th>
                                        <th>Gross Profit/Loss%</th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>

                                            </td>
                                        </tr>
                                    </tbody>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="4">
                      <div>
                        <Container fluid>
                          <Row className="pt-4">
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th>Last Contact </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Equipment</th>
                                        <th>Power Unit</th>
                                        <th>Trailer</th>
                                        <th>Distance</th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="5">
                      <div>
                        <Container fluid>
                          <Row className="pt-4">
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th>Last Contact </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Equipment</th>
                                        <th>Power Unit</th>
                                        <th>Trailer</th>
                                        <th>Distance</th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="6">
                      <div>
                        <Container fluid>
                          <Row className="pt-4">
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th>Last Contact </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Equipment</th>
                                        <th>Power Unit</th>
                                        <th>Trailer</th>
                                        <th>Distance</th>
                                        <th>weight</th>
                                      </tr>
                                    </thead>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>
                    <TabPane tabId="7">
                      <div>
                        <Container fluid>
                          <Row className="pt-4">
                            <Col lg={12}>
                              <Card>
                                <CardHeader className="headerName">
                                  Results
                                </CardHeader>

                                <CardBody>
                                  <Table responsive size="sm">
                                    <thead className="small">
                                      <tr>
                                        <th>#</th>
                                        <th>Load ID</th>
                                        <th>Load Status </th>
                                        <th>Last Contact </th>
                                        <th> Customer</th>
                                        <th> Pick </th>
                                        <th>Pick Date </th>
                                        <th>Drops </th>
                                        <th>Drop Date </th>
                                        <th> Users & Roles </th>
                                        <th> Carrier</th>
                                        <th> Driver </th>
                                        <th>Equipment</th>
                                        <th>Power Unit</th>
                                        <th>Trailer</th>
                                        <th>Distance</th>
                                        <th></th>
                                      </tr>
                                    </thead>
                                  </Table>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoadPageMAnagement;
