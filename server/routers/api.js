const express = require('express');
const router = express.Router();
const story = require('./../controllers/story.controller');

router.post('/add-story', story.addStory);
router.get('/stories', story.getAllStories);

module.exports = router;