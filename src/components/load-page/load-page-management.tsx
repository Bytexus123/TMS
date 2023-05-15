import React, { useState } from "react";
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
import { TbListSearch } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";

interface LoadPageMAnagementProps {
  tabTitles: string[];
  children?: any[] | JSX.Element | JSX.Element[];
  tabActive: number;
}
const LoadPageMAnagement = ({ tabTitles }: LoadPageMAnagementProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="content loads-section">
      <Container fluid className="py-3">
        <Row>
          <Col sm={3}>
            <Nav tabs pills vertical className="border-bottom-0">
              {tabTitles.map((tabTitle, index) => (
                <NavItem className="mb-2" key={index}>
                  <NavLink
                    className={`text-dark bg-light opacity-50 py-4 cursor-pointer ${
                      activeTab === index
                        ? "active opacity-100 fw-bold"
                        : "fw-semibold"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tabTitle}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>

          <Col sm={9} className="ps-0" style={{ zIndex: 1 }}>
            <Container fluid className="bg-light rounded">
              <Row>
                <Col>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={0}>
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

                    <TabPane tabId={1}>
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
                    <TabPane tabId={2}>
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
                                        <td></td>
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
                    <TabPane tabId={3}>
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
                    <TabPane tabId={4}>
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
                    <TabPane tabId={5}>
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
                    <TabPane tabId={6}>
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
