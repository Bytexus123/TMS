import React from "react";
import { Col, Navbar, NavbarBrand, Row } from "reactstrap";

const Navigationbar = () => {
  return (
    <div className="header-section">
      <Navbar className="px-5" color="info" dark>
        <NavbarBrand href="/" >TMS</NavbarBrand>
        <Row>
          <Col className="user-dropdown-greeting">
            <i className="fa-light fa-user"></i>
            <div className="d-block text-start">
              <div>TMS User</div>
              <div>tmsuser@tmsgroup.com</div>
            </div>
          </Col>
          <Col className="d-flex user-dropdown-greeting">
            <div className="px-2">
              <i className="fa-light fa-message-lines"></i>
            </div>
            <div className="px-2">
              <i className="fa-light fa-bell"></i>
            </div>
            <div>
              <i className="fa-light fa-gear"></i>
            </div>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
