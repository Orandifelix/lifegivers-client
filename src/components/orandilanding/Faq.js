import React, { useState } from "react";
import faqData from "./data.json";
import "./Faq.css";  

const Faq = () => {
  const faqs = faqData.faqs;
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeQuestion === index ? "active" : ""}`}
            onClick={() =>
              setActiveQuestion(activeQuestion === index ? null : index)
            }
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="toggle-icon">
                {activeQuestion === index ? "-" : "+"}
              </span>
            </div>
            {activeQuestion === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
