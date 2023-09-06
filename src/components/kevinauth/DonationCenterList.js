import React, { useEffect, useState } from 'react';

function DonationCenterList() {
  const [donationCenters, setDonationCenters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/donation_centers')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setDonationCenters(data))
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Donation Centers</h1>
      {error ? (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      ) : (
        <div className="row">
          {donationCenters.map((center) => (
            <div key={center.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt={center.name}
                  className="custom-card-img"
                  style={{ height: '200px', width: '100%' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{center.name}</h5>
                  <p className="card-text">{center.location}</p>
                  <p className="card-text">
                    <strong>Contact:</strong> {center.contact}
                  </p>
                  <p className="card-text">
                    <strong>Opening Hours:</strong> {center.operating_hours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DonationCenterList;
