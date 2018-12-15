const express = require('express');
const router = express.Router();
const story = require('./../controllers/story.controller');
const user = require('./../controllers/user.controller');

router.post('/add-story', story.addStory);

router.get('/stories', story.getAllStories);

router.post('/signup', user.signUp);

router.post('/login', user.logIn);

module.exports = router;