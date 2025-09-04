import React from "react";
import "./NewsItem.css";

function NewsItem({ title, content }) {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default NewsItem;
