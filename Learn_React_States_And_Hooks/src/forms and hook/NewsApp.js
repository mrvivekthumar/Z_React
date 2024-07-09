import React, { useEffect, useRef, useState } from "react";
import News from "./News";

function NewsApp() {
  const apiKey = "e85eea0115914506aa8a4d7d03399eb6";
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const queryInputRef = useRef(null);

  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-06-09&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setNewsList(jsonData.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Consider displaying an error message to the user here
      }
    };

    fetchData();
  }, [query, apiKey]);

  function handleSubmit() {
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two columns of equal width
    gridGap: "20px", // Gap between grid items
    justifyContent: "space-between", // Distribute items evenly
    textAlign: "center"
  };

  return (
    <div className="news-app">
      <h1 style={{ fontFamily: "monospace", fontSize: "2.5rem", textAlign: "center", margin: "20px" }}>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input style={{ margin: "10px" }} className="query-input" type="text" ref={queryInputRef} />
        <input className="btn-Submit" type="submit" value="Search" />
      </form>

      {newsList.length > 0 ? (
        <div style={gridStyles}>
          {newsList.map((news) => (
            <News key={news.url} news={news} />
          ))}
        </div>
      ) : (
        <p>Loading news articles...</p>
      )}
    </div>
  );
}

export default NewsApp;
