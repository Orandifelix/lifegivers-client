import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class Article1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      donor_name: "",
      donation_type_id: "", // Assuming this is a dropdown/select input
      donation_photo: "",
      author: "",
      errors: [],
      successMessage: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article: { // Match the expected structure in your Rails controller
            title: this.state.title,
            content: this.state.content,
            donor_name: this.state.donor_name,
            donation_type_id: this.state.donation_type_id,
            donation_photo: this.state.donation_photo,
            author: this.state.author,
          },
        }),
      });

      if (response.ok) {
        // Article successfully submitted
        this.setState({ successMessage: "Article submitted successfully" });
      } else {
        // Handle errors here
        const errorData = await response.json();
        this.setState({ errors: errorData.errors });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { errors, successMessage } = this.state;

    return (
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md={6}>
            {successMessage && (
              <div className="alert alert-success">
                {successMessage}
              </div>
            )}
            {errors.length > 0 && (
              <div className="alert alert-danger">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
               <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="donor_name">
                <Form.Label>Donor Name</Form.Label>
                <Form.Control
                  type="text"
                  name="donor_name"
                  value={this.state.donor_name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="donation_type_id">
                <Form.Label>Donation Type</Form.Label>
                <Form.Control
                  as="select"
                  name="donation_type_id"
                  value={this.state.donation_type_id}
                  onChange={this.handleChange}
                  required
                >
                  {/* Add options for donation types */}
                  <option value="1">Type 1</option>
                  <option value="2">Type 2</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="donation_photo">
                <Form.Label>Donation Photo (URL)</Form.Label>
                <Form.Control
                  type="text"
                  name="donation_photo"
                  value={this.state.donation_photo}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Row>
                <Col className="text-left">
                  <Button variant="primary" type="submit">
                    Submit Article
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

export default Article1;
