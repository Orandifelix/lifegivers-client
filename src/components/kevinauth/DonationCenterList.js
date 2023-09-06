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
        <ul className="list-group">
          {donationCenters.map((center) => (
            <li key={center.id} className="list-group-item">
              <h5 className="mb-0">{center.name}</h5>
              <p className="mb-1">{center.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DonationCenterList;

