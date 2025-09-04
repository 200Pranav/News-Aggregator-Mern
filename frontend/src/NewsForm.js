import React, { useState } from "react";
import "./NewsForm.css";

function NewsForm({ onNewsAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = { title, content };

    try {
      const response = await fetch("http://localhost:5000/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArticle),
      });

      if (response.ok) {
        await response.json();
        onNewsAdded();
        setTitle("");
        setContent("");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <h2>Add News</h2>
      <input
        type="text"
        placeholder="Enter news title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter news content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add News</button>
    </form>
  );
}

export default NewsForm;
