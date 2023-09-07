import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './DonationForm.css'; // Import your custom CSS file

class DonationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donationType: "",
      donationDate: "",
      donationTime: "",
      donationStatus: "",
      transactionNumber: "",
      errors: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Handle donation submission
    const donationData = {
      donationType: this.state.donationType,
      donationDate: this.state.donationDate,
      donationTime: this.state.donationTime,
      donationStatus: this.state.donationStatus,
      transactionNumber: this.state.transactionNumber,
    };

    // Add your fetch request to submit the donation data to your backend here
    // You should replace the URL and add appropriate headers and error handling
    try {
      const response = await fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        // Donation successfully submitted
        console.log("Donation submitted successfully");
      } else {
        // Handle errors here
        const errorData = await response.json();
        this.setState({ errors: errorData.errors });
        console.error("Donation submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md={6}>
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
              <Form.Group controlId="donationType">
                <Form.Label>Donation Type</Form.Label>
                <Form.Control
                  as="select"
                  name="donationType"
                  value={this.state.donationType}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Select a Donation Type</option>
                  <option value="Blood Donation">Blood Donation</option>
                  <option value="Organ Donation">Organ Donation</option>
                  <option value="Platelets Donation">Platelets Donation</option>
                  <option value="Tissues Donation">Tissues Donation</option>
                  <option value="Cord Blood Donation">Cord Blood Donation</option>
                  <option value="Bone Marrow Donation">Bone Marrow Donation</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="donationDate">
                <Form.Label>Donation Date</Form.Label>
                <Form.Control
                  type="date"
                  name="donationDate"
                  value={this.state.donationDate}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="donationTime">
                <Form.Label>Donation Time</Form.Label>
                <Form.Control
                  type="time"
                  name="donationTime"
                  value={this.state.donationTime}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="donationStatus">
                <Form.Label>Donation Status</Form.Label>
                <Form.Control
                  type="text"
                  name="donationStatus"
                  value={this.state.donationStatus}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="transactionNumber">
                <Form.Label>Transaction Number</Form.Label>
                <Form.Control
                  type="text"
                  name="transactionNumber"
                  value={this.state.transactionNumber}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Row>
                <Col className="text-left">
                  <Link to="/articles1">
                    <Button variant="primary" type="submit">
                      Submit Donation
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
}

export default DonationForm;
