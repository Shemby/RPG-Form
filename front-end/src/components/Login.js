import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Container fluid="sm" className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <InputGroup className="mb-3">
              <FormControl placeholder="Username" aria-label="Username" />
            </InputGroup>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                type="password"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Button variant="primary" type="submit" lg="8">
            Submit
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Login;
