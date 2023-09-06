import React, { useState } from 'react';

function DonationCenterCreate() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    operatingHours: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/donation_centers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create a donation center');
      }

      setFormData({
        name: '',
        location: '',
        contact: '',
        operatingHours: '',
      });
      setError(null);
      alert('Donation center created successfully!');
    } catch (error) {
      setError(error.message || 'Failed to create a donation center');
    }
  };

  return (
    <div className="container">
      <h1>Create a Donation Center</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="operatingHours" className="form-label">Operating Hours</label>
          <input
            type="text"
            className="form-control"
            id="operatingHours"
            name="operatingHours"
            value={formData.operatingHours}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Donation Center</button>
      </form>
    </div>
  );
}

export default DonationCenterCreate;
