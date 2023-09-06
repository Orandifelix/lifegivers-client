import React from 'react';

const DonationCenter = ({center, centerDetails}) => {
    if (centerDetails) {
    return (
        <div>
            <h1>Donation Center Details</h1>
            <p>Name: {center.name}</p>
            <p>Location: {center.location}</p>
            <p>Contact: {center.contact}</p>
            <p>Operating Hours: {center.operating_hours}</p>
        </div>
    );
    } else {
    return (
        <div>
          <h2>{center.name}</h2>
          <p>Location: {center.location}</p>
          <p>Contact: {center.contact}</p>
          <p>Operating Hours: {center.operating_hours}</p>
        </div>
      );
    }
  };

export default DonationCenter;
