const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/add-story', (req, res) => {
  res.render('index');
})

router.get('/login', (req, res) => {
  res.render('index');
})

router.get('/signup', (req, res) => {
  res.render('index');
})

router.get('/:username',(req, res) => {
  res.render('index');
}) 

router.get('/story',(req, res) => {
  res.render('index');
})


module.exports = router;