import React from "react";
import articlesData from "./data.json";

const Articles = () => {
  const articleStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    maxWidth: "300px",
    fontSize: "14px",
  };

  const articlesContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const donorNameStyle = {
    fontWeight: "bold",
  };

  return (
    <div className="articles" style={articlesContainerStyle}>
      {articlesData.map((article) => (
        <div style={articleStyle} key={article.id}>
          <img src={article.donation_photo} alt="Donation" style={{ maxWidth: "100%" }} />
          <p><span style={donorNameStyle}>Donor Name:</span> {article.donor_name}</p>
        
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
