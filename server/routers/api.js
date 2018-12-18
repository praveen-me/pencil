const express = require('express');
const router = express.Router();
const story = require('./../controllers/story.controller');
const user = require('./../controllers/user.controller');

router.post('/add-story', story.addStory);

router.get('/stories', story.getAllStories);

router.post('/signup', user.signUp);

router.post('/login', user.logIn);

router.get('/isLoggedIn', user.isLoggedIn);

router.get('/logOut', user.logOut)

router.get('/:username/stories', story.getStoriesForSingleUser)

router.post('/stories/:storyId/clap', story.setClaps);

module.exports = router;