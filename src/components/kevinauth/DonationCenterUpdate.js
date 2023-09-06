import React, { useState, useEffect } from 'react';

function DonationCenterUpdate() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    operatingHours: '',
  });

  const [error, setError] = useState(null);
  const [centers, setCenters] = useState([]);
  const [selectedCenterId, setSelectedCenterId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectCenter = (centerId) => {
    setSelectedCenterId(centerId);

    // Find the selected center by ID and populate the form
    const selectedCenter = centers.find((center) => center.id === centerId);
    if (selectedCenter) {
      setFormData({
        name: selectedCenter.name,
        location: selectedCenter.location,
        contact: selectedCenter.contact,
        operatingHours: selectedCenter.operatingHours,
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/donation_centers/${selectedCenterId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update the donation center');
      }

      setFormData({
        name: '',
        location: '',
        contact: '',
        operatingHours: '',
      });
      setError(null);
      setSelectedCenterId(null);
      alert('Donation center updated successfully!');
    } catch (error) {
      setError(error.message || 'Failed to update the donation center');
    }
  };

  const handleDelete = async () => {
    if (!selectedCenterId) return;

    try {
      const response = await fetch(`http://localhost:3000/donation_centers/${selectedCenterId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete the donation center');
      }

      setFormData({
        name: '',
        location: '',
        contact: '',
        operatingHours: '',
      });
      setError(null);
      setSelectedCenterId(null);
      alert('Donation center deleted successfully!');
    } catch (error) {
      setError(error.message || 'Failed to delete the donation center');
    }
  };

  useEffect(() => {
    // Fetch the list of donation centers
    fetch('http://localhost:3000/donation_centers')
      .then((response) => response.json())
      .then((data) => setCenters(data));
  }, []);

  return (
    <div className="container">
      <h1>Update / Delete a Donation Center</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            {centers.map((center) => (
              <li
                key={center.id}
                className={`list-group-item ${
                  center.id === selectedCenterId ? 'active' : ''
                }`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelectCenter(center.id)}
              >
                {center.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-8">
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
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
              <label htmlFor="location" className="form-label">
                Location
              </label>
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
              <label htmlFor="contact" className="form-label">
                Contact
              </label>
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
              <label htmlFor="operatingHours" className="form-label">
                Operating Hours
              </label>
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
            <button type="submit" className="btn btn-primary mr-2">
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationCenterUpdate;
