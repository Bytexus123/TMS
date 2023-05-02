import React from "react";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { useLocation } from "react-router-dom";
import { handleLogout } from "../auth";

const NavigationBar = () => {
  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "/signup") {
    return null;
  }
  return (
    <div className="header-section">
      <Navbar className="px-5">
        <NavbarBrand style={{ color: "white" }}>
          TMS
        </NavbarBrand>
        <Row>
          <UncontrolledButtonDropdown direction="down" className="float-right">
            <DropdownToggle
              id="userProfileDropdown"
              color="transparent"
              className="user-dropdown__icon"
            >
              <Row>
                <Col className="user-dropdown-greeting">
                  <i className="fa-light fa-user"></i>
                  <div className="d-block text-start">
                    <div>TMS User</div>
                    <div>tmsuser@tmsgroup.com</div>
                  </div>
                </Col>
              </Row>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="border-bottom">
                <div className="d-flex justify-content-between text-align-center">
                  <span className="text-dark">Profile</span>
                </div>
              </DropdownItem>
              <DropdownItem className="border-bottom" onClick={handleLogout}>
                <div className="d-flex justify-content-between text-align-center">
                  <span className="text-dark">Logout</span>
                  <i
                    style={{ fontSize: "1rem" }}
                    className="fas fa-arrow-right-from-bracket"
                  ></i>
                </div>
              </DropdownItem>
            </DropdownMenu>
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
          </UncontrolledButtonDropdown>
          {/* <Col className="user-dropdown-greeting">
            <i className="fa-light fa-user"></i>
            <div className="d-block text-start">
              <div>TMS User</div>
              <div>tmsuser@tmsgroup.com</div>
            </div>
          </Col> */}
        </Row>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
