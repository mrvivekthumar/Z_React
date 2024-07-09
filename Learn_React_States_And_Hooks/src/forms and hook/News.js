import React from "react";
import "./News.css";

function News({ news }) {
  const defaultImage = "https://via.placeholder.com/150"; // Placeholder image

  return (
    <div className="news">
      <img src={news?.urlToImage || defaultImage} alt={news?.title} />
      <h2>{news?.title}</h2>
      <p>{news?.description}</p>
      <button className="btn-read-more" onClick={() => window.open(news?.url)}>
        Read More
      </button>
    </div>
  );
}

export default News;
