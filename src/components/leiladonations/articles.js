import React from "react";
import "./components/leiladonations/articles.css"; // Update the CSS file path accordingly
import articlesData from "./components/leiladonations/articles1.js"; // Import the data from Article1.js

const Articles = () => {
  return (
    <>
      <div className="articles">
        {/* Map through the articlesData and create cards for each article */}
        {articlesData.map((article) => (
          <div className="article-card" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            {/* You can add more elements here, like images, links, etc. */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
