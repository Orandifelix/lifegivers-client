import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
import "./Donationtypes.css";
import DonationDetails from "./DonationDetails";

const Donationtypes = () => {
//   const { donationType } = useParams(); // Get the route parameter for donation type
  const [donationData, setDonationData] = useState("Blood Donation");

 
    const donationTypesData = {
      blood: {
        name: "Blood Donation",
        description: "Blood donation involves giving blood for medical use.",
        eligibility_criteria:
          "Eligibility for blood donation depends on factors like age and health.",
        donation_frequency: "Blood can be donated at regular intervals.",
        preparation_guidelines:
          "Donors are advised to eat before donating and stay hydrated.",
        risks_and_benefits:
          "Blood donation helps save lives with minimal risks to donors.",
        post_donation_instructions:
          "Donors are advised to rest and have a snack after donation.",
        donation_duration: "The donation process takes about 10-15 minutes.",
        donor_impact_information:
          "Your blood donation can save lives in emergency situations.",
        medical_considerations:
          "Donors undergo a brief medical evaluation before donation.",
      },
      organ: {
        name: "Organ Donation",
        description:
          "Organ donation involves giving organs for transplantation.",
        eligibility_criteria:
          "Eligibility for organ donation depends on medical and ethical considerations.",
        donation_frequency:
          "Organ donation occurs posthumously or during specific medical procedures.",
        preparation_guidelines:
          "Organ donation requires careful coordination with medical professionals.",
        risks_and_benefits:
          "Organ donation can save lives but involves surgical risks.",
        post_donation_instructions:
          "Organ donation is conducted by medical experts.",
        donation_duration:
          "The duration varies depending on the specific organ donation process.",
        donor_impact_information:
          "Organ donation provides life-saving opportunities for recipients.",
        medical_considerations:
          "Organ donation requires compatibility testing and expert care.",
      },
      platelets: {
        name: "Platelets Donation",
        description:
          "Platelets donation involves giving platelets for patients with blood disorders.",
        eligibility_criteria:
          "Eligibility for platelets donation depends on donor health and platelet count.",
        donation_frequency: "Platelets can be donated at specific intervals.",
        preparation_guidelines:
          "Donors may receive medications to increase platelet count before donation.",
        risks_and_benefits:
          "Platelets donation helps patients with blood disorders.",
        post_donation_instructions:
          "Donors are monitored for side effects after donation.",
        donation_duration: "The donation process takes about 1-2 hours.",
        donor_impact_information:
          "Your platelets donation supports individuals with blood disorders.",
        medical_considerations:
          "Platelets donation requires specialized equipment and trained staff.",
      },
      tissues: {
        name: "Tissues Donation",
        description:
          "Tissues donation involves giving tissues like skin, bone, tendons, and heart valves for transplantation or research.",
        eligibility_criteria:
          "Eligibility for tissues donation depends on the specific tissue and intended use.",
        donation_frequency:
          "Tissues donation can occur posthumously or during specific medical procedures.",
        preparation_guidelines:
          "Tissues donation may require surgical procedures.",
        risks_and_benefits:
          "Tissues donation can enhance recipients' lives and contribute to research.",
        post_donation_instructions:
          "Posthumous tissues donation involves coordination with healthcare facilities.",
        donation_duration:
          "The duration varies based on the tissue and procedure.",
        donor_impact_information:
          "Tissues donation provides life-changing benefits to recipients and supports research.",
        medical_considerations:
          "Medical professionals and transplant coordinators are involved in the donation process.",
      },
      "cord-blood": {
        name: "Cord Blood Donation",
        description:
          "Cord blood donation involves collecting blood from the umbilical cord and placenta after childbirth for stem cell transplantation.",
        eligibility_criteria:
          "Cord blood can be donated during childbirth, and eligibility is determined by the cord blood bank.",
        donation_frequency:
          "Cord blood is typically collected only once during childbirth.",
        preparation_guidelines:
          "Cord blood collection occurs after the baby's birth, and no special preparations are needed for the mother.",
        risks_and_benefits:
          "Cord blood contains valuable stem cells that can treat various medical conditions.",
        post_donation_instructions:
          "Cord blood is stored in a cord blood bank for potential future use in transplantation.",
        donation_duration:
          "Cord blood collection is a quick process that takes about 10-15 minutes.",
        donor_impact_information:
          "Cord blood donation can provide life-saving stem cells for individuals with blood disorders.",
        medical_considerations:
          "Cord blood banking is an important option for families and individuals at risk of certain medical conditions.",
      },
      "bone-marrow": {
        name: "Bone Marrow Donation",
        description:
          "Bone marrow donation involves donating marrow or blood stem cells for patients with blood cancers or disorders.",
        eligibility_criteria:
          "Eligibility for bone marrow donation depends on factors such as age and medical compatibility with the recipient.",
        donation_frequency:
          "Bone marrow donation is typically a one-time procedure.",
        preparation_guidelines:
          "Donors may receive injections to increase the number of stem cells in their bloodstream before donation.",
        risks_and_benefits:
          "Bone marrow donation can be life-saving for recipients.",
        post_donation_instructions:
          "After bone marrow donation, donors can expect some fatigue and discomfort but generally recover within a few days.",
        donation_duration:
          "The duration of bone marrow donation depends on the method used.",
        donor_impact_information:
          "Your bone marrow donation can give hope to individuals with leukemia, lymphoma, and other blood disorders.",
        medical_considerations:
          "Bone marrow donation requires compatibility testing and coordination with transplant centers.",
      },
    };

      const handleButtonClick = (type) => {
    setDonationData(donationTypesData[type]);
  };

  return (
    <>
      <div className="donation-container">
        <div className="text-container">
          <h3 className="donation-text">
            "Thank you for becoming a part of this profound mission. Your
            contribution has the power to transform not just one life, but
            countless others. Together, we can be the beacon of hope, the
            lifeline of change, and the guardian of countless dreams. Your
            donation is a gift of life, love, and a brighter future. Thank you
            for making the world a better place, one generous act at a time."
          </h3>
        </div>
      </div>
      <div className="buttons-container">
        {/* Rendering buttons for each donation type */}
        {Object.keys(donationTypesData).map((key) => (
          <button className="button1" key={key} onClick={() => handleButtonClick(key)}>
            {donationTypesData[key].name}
          </button>
        ))}
      </div>
      {/* Rendering DonationDetails with fetched data */}
      {donationData && <DonationDetails data={donationData} />}
    </>
  );
};

export default Donationtypes;