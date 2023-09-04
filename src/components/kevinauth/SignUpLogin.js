import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class SignUpLoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      name: "",
      gender: "",
      age: "",
      weight: "",
      email: "",
      contact_number: "",
      isSignUp: true, // To toggle between signup and login forms
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isSignUp) {
      // Handle signup
      const userData = {
        user: {
          username: this.state.username,
          password: this.state.password,
          name: this.state.name,
          gender: this.state.gender,
          age: this.state.age,
          weight: this.state.weight,
          email: this.state.email,
          contact_number: this.state.contact_number,
        },
      };      
      console.log(userData);
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            })
        .catch((error) => {
            console.error('Error:', error);
    });

    } else {
      // Handle login
      const loginData = {
        username: this.state.username,
        password: this.state.password,
      };
      fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    }).then((response) => {
        response.json().then((data) => {
          console.log(data);
        })
    })
    }
  };

  toggleForm = () => {
    this.setState((prevState) => ({ isSignUp: !prevState.isSignUp }));
  };

  render() {
    const { isSignUp } = this.state;

    return (
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={this.handleSubmit}>
              {isSignUp && (
                <>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Control>
                </Form.Group>
                  <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="weight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="number"
                      name="weight"
                      value={this.state.weight}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="contact_number">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="contact_number"
                      value={this.state.contact_number}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <br />
                <Row>
                  <Col className="text-left">
                    <Button variant="primary" type="submit">
                    {isSignUp ? "Sign Up" : "Login"}
                    </Button>
                  </Col>
                  <Col className="text-right">
                    <Button
                    variant="secondary"
                    onClick={this.toggleForm}
                    className="ml-2"
                    >
                    {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
                    </Button>
                  </Col>
                </Row>
                <br />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUpLoginComponent;
