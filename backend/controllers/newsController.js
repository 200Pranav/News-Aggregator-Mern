const News = require("../models/newsModel");

// GET all news
const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add news
const addNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newArticle = new News({ title, content });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE news
const deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getNews, addNews, deleteNews };
