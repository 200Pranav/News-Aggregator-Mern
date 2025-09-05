// newsRoutes.js
const express = require('express');
const router = express.Router();
const { getNews, addNews, deleteNews } = require('../controllers/newsController');

router.get('/', getNews);              // GET all news
router.post('/', addNews);             // POST new news
router.delete('/:id', deleteNews);     // DELETE news by id

module.exports = router;
