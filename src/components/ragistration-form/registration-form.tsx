import React, { useReducer } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";

type Action =
  | { type: "setMcNumber"; payload: string }
  | { type: "setCompany"; payload: string }
  | { type: "setTitle"; payload: string }
  | { type: "setFirstName"; payload: string }
  | { type: "setLastName"; payload: string }
  | { type: "setEmail"; payload: string }
  | { type: "setAlternateEmail"; payload: string }
  | { type: "setWebsite"; payload: string }
  | { type: "setFax"; payload: string }
  | { type: "setMobile"; payload: string }
  | { type: "setPhone"; payload: string };

type State = {
  mcNumber: string;
  company: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  alternateEmail: string;
  website: string;
  fax: string;
  mobile: string;
  phone: string;
};

const initialState: State = {
  mcNumber: "",
  company: "",
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  alternateEmail: "",
  website: "",
  fax: "",
  mobile: "",
  phone: "",
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setMcNumber":
      return { ...state, mcNumber: action.payload };
    case "setCompany":
      return { ...state, company: action.payload };
    case "setTitle":
      return { ...state, title: action.payload };
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setAlternateEmail":
      return { ...state, alternateEmail: action.payload };
    case "setWebsite":
      return { ...state, website: action.payload };
    case "setFax":
      return { ...state, fax: action.payload };
    case "setMobile":
      return { ...state, mobile: action.payload };
    case "setPhone":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};
const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("McNumber:", state.mcNumber);
    console.log("Comapny:", state.company);
    console.log("Title:", state.title);
    console.log("FirstName:", state.firstName);
    console.log("LastName:", state.lastName);
    console.log("Email:", state.email);
    console.log("AlternateEmail:", state.alternateEmail);
    console.log("Website:", state.website);
    console.log("Fax:", state.fax);
    console.log("Mobile:", state.mobile);
    console.log("Phone:", state.phone);
  };
  return (
    <>
      <div className="login">
        <Container>
          <Row>
            <Col className="vh-100 mx-auto d-flex align-items-center">
              <Container className="login-form py-4 shadow rounded my-5">
                <Row>
                  <Col sm={10} className="mx-auto">
                    <div className="text-center my-4">
                      <h3 className="fw-bold ">Registration Form</h3>
                    </div>
                    <Form className="mt-5" onSubmit={handleSubmit}>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                MC Number
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.mcNumber}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setMcNumber",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Mc Number"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Company
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.company}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setCompany",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Company"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Title
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.title}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setTitle",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Title"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                First Name
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.firstName}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setFirstName",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your FirstName"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Last Name
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.lastName}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setLastName",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Last Name"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Email
                              </InputGroupText>
                              <Input
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setEmail",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Email"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Alertnate Email
                              </InputGroupText>
                              <Input
                                type="email"
                                name="email"
                                value={state.alternateEmail}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setAlternateEmail",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Alternate Email"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Website
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.website}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setWebsite",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Website"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Fax
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.fax}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setFax",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Fax"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Mobile
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.mobile}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setMobile",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Mobile"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupText className="d-block d-sm-inline fw-bold">
                                Phone
                              </InputGroupText>
                              <Input
                                type="text"
                                name="text"
                                value={state.phone}
                                onChange={(event) =>
                                  dispatch({
                                    type: "setPhone",
                                    payload: event.target.value,
                                  })
                                }
                                placeholder="Enter Your Phone"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup className="text-center">
                        <Button
                          color="primary"
                          className="px-5 py-2 shadow"
                          type="submit"
                        >
                          Register
                        </Button>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RegistrationForm;
