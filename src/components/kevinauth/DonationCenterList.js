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
