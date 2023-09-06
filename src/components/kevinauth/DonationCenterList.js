import React, { useEffect, useState } from 'react';

function DonationCenterList() {
  const [donationCenters, setDonationCenters] = useState([]);
  const [error, setError] = useState(null); // State to hold error information

  useEffect(() => {
    fetch('http://localhost:3000/donation_centers') // Replace with the actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setDonationCenters(data))
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err); // Set the error state
      });
  }, []);

  return (
    <div>
      <h1>Donation Centers</h1>
      {error ? ( // Render an error message if there's an error
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {donationCenters.map((center) => (
            <li key={center.id}>
              {center.name} - {center.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DonationCenterList;
