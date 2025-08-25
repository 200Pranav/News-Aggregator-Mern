const express = require('express');
const router = express.Router();
const { getNews, addNews, deleteNews } = require('../controllers/newsController'); // ✅ include deleteNews

// Routes
router.get('/', getNews);          // GET all news
router.post('/', addNews);         // POST a news article
router.delete('/:id', deleteNews); // ✅ DELETE a news article by ID

module.exports = router;
