import React, { useEffect, useState } from "react";
import NewsForm from "./NewsForm";
import NewsItem from "./NewsItem";
import "./NewsList.css";

function NewsList() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1 className="header">📰 News App</h1>
      <NewsForm onNewsAdded={fetchNews} />
      <h2 className="section-title">Latest News</h2>
      <div className="news-grid">
        {news.length === 0 ? (
          <p>No news available</p>
        ) : (
          news.map((article) => (
            <NewsItem
              key={article._id}
              title={article.title}
              content={article.content}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NewsList;
