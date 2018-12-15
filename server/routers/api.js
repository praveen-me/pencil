const express = require('express');
const router = express.Router();
const story = require('./../controllers/story.controller');
const user = require('./../controllers/user.controller');
const passport = require('passport');

router.post('/add-story', story.addStory);

router.get('/stories', story.getAllStories);

router.post('/signup', user.signUp);

router.post('/login', 
  passport.authenticate('local', {
    failureRedirect : '/login', 
    failureMessage : "Invalid username or password"
  }), user.logIn)

module.exports = router;