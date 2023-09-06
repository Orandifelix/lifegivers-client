import React from "react";
import "./Donationtypes.css"; 

const DonationDetails = ({ data }) => {
  return (
    <div className="donation-card">
      <h2 className="donation-title">{data.name}</h2>
      <div className="donation-content">
        <p>
          <strong>Description:</strong> {data.description}
        </p>
        <p>
          <strong>Eligibility Criteria:</strong> {data.eligibility_criteria}
        </p>
        <p>
          <strong>Donation Frequency:</strong> {data.donation_frequency}
        </p>
        <p>
          <strong>Preparation Guidelines:</strong> {data.preparation_guidelines}
        </p>
        <p>
          <strong>Risks and Benefits:</strong> {data.risks_and_benefits}
        </p>
        <p>
          <strong>Post-Donation Instructions:</strong>{" "}
          {data.post_donation_instructions}
        </p>
        <p>
          <strong>Donation Duration:</strong> {data.donation_duration}
        </p>
        <p>
          <strong>Donor Impact Information:</strong>{" "}
          {data.donor_impact_information}
        </p>
        <p>
          <strong>Medical Considerations:</strong> {data.medical_considerations}
        </p>
      </div>
    </div>
  );
};

export default DonationDetails;
