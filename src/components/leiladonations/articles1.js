import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Article1() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    donor_name: "",
    donation_type_id: "",
    donation_photo: "",
    author: "",
  });

  const [errors, setErrors] = useState([]); // Ensure it's initialized as an empty array

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Fetch the CSRF token from the meta tag
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
  
      const response = await fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken, // Include the CSRF token in the headers
        },
        body: JSON.stringify({
          article: {
            ...formData,
          },
        }),
      });

      if (response.ok) {
        setSuccessMessage("Article submitted successfully");
        setErrors([]); // Reset errors to an empty array on success
      } else {
        const errorData = await response.json();
        setErrors(errorData.errors || []); // Ensure errors is always an array
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <br />
      <Row className="justify-content-center">
        <Col md={6}>
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
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
       <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="donor_name">
              <Form.Label>Donor Name</Form.Label>
              <Form.Control
                type="text"
                name="donor_name"
                value={formData.donor_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="donation_type_id">
              <Form.Label>Donation Type</Form.Label>
              <Form.Control
                as="select"
                name="donation_type_id"
                value={formData.donation_type_id}
                onChange={handleChange}
                required
              >
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="donation_photo">
              <Form.Label>Donation Photo (URL)</Form.Label>
              <Form.Control
                type="text"
                name="donation_photo"
                value={formData.donation_photo}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />
            <Row>
              <Col className="text-left">
              <Link to="/articles">
  <Button variant="primary" type="submit">
    Submit Article
  </Button>
</Link>
              </Col>
            </Row>
            <br />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Article1;