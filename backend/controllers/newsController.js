const News = require('../models/newsModel');

// Get all news
const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a news article
const addNews = async (req, res) => {
  try {
    const { title, description, url, source, publishedAt } = req.body;
    const newsItem = new News({ title, description, url, source, publishedAt });
    await newsItem.save();
    res.status(201).json(newsItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete a news article by ID
const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getNews, addNews, deleteNews };

