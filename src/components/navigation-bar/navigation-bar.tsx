import React from "react";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { handleLogout } from "../auth";
import { FaUserAlt } from "react-icons/fa";
import { BsBell, BsGear } from "react-icons/bs";
import { BiArrowBack, BiMessageDetail } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

interface NavigationBarProps {
  navTitle?: string;
}
const NavigationBar = ({ navTitle = "TMS" }: NavigationBarProps) => {
  const { pathname } = useLocation();

  if (
    pathname === "/" ||
    pathname === "/registration-form" ||
    pathname === "/forgetpassword"
  ) {
    return null;
  }
  return (
    <div className="header-section">
      <Navbar className="px-5">
        <Nav>
          <NavItem>
            <Link to={"/dashboard"} className="fs-2 pe-2 link-light">
              {navTitle === "TMS" ? <BiArrowBack /> : null}
            </Link>
            <NavbarBrand className="mb-0 fw-bold" style={{ color: "white" }}>
              {navTitle}
            </NavbarBrand>
          </NavItem>
        </Nav>
        <Row>
          <UncontrolledButtonDropdown direction="down" className="float-right">
            <DropdownToggle
              id="userProfileDropdown"
              color="transparent"
              className="user-dropdown__icon"
            >
              <Row>
                <Col className="user-dropdown-greeting">
                  <FaUserAlt className="fs-2 me-2" />
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
                  <FiLogOut style={{ fontSize: "1rem" }} />
                </div>
              </DropdownItem>
            </DropdownMenu>
            <Col className="d-flex user-dropdown-greeting">
              <div className="px-2">
                <BiMessageDetail className="fs-3 me-2" />
              </div>
              <div className="px-2">
                <BsBell className="fs-3 me-2" />
              </div>
              <div>
                <BsGear className="fs-3 me-2" />
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
