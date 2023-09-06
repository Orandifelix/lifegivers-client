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
      isSignUp: true,
      error: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (this.state.isSignUp) {
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

        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to sign up');
        }

        // Reset form and clear errors on success
        this.setState({
          name: "",
          gender: "",
          age: "",
          weight: "",
          email: "",
          contact_number: "",
          error: null,
        });

        console.log('Sign up successful');
      } else {
        const loginData = {
          username: this.state.username,
          password: this.state.password,
        };

        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to log in');
        }

        // Reset form and clear errors on success
        this.setState({
          password: "",
          error: null,
        });

        console.log('Log in successful');
      }
    } catch (error) {
      // Handle and store errors
      this.setState({ error: error.message });
      console.error('Error:', error);
    }
  };

  toggleForm = () => {
    this.setState((prevState) => ({ isSignUp: !prevState.isSignUp }));
  };

  render() {
    const { isSignUp } = this.state;

    return (
      <>
      {/* <Navbar /> */}
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={this.handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
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
      <br />
      </>
    );
  }
}

export default SignUpLoginComponent;
