const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();

//Connecting To Mongodb
mongoose.connect('mongodb://localhost/pencil', { useNewUrlParser: true } ,(err, done) => {
  if (err) throw err;
  console.log('Connected to mongodb');
})


// Setting Paths
app.use('/static', express.static(path.join(__dirname,'/')))
//Setting views of the app
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'pug');

//Essential Middlewares
app.use(bodyParser.json());

// Middleware of webpack
if(process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware')
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}


// Set cookies session
app.use(session({
  secret : 'pencil users',
  resave : false,
  saveUninitialized : false,
  cookie : {
    maxAge : 500000
  },
  store: new MongoStore({ url: 'mongodb://localhost/altupdates-session' })
}))

app.use(passport.initialize());
app.use(passport.session());
require('./server/modules/passport')(passport)

app.use('/',require('./server/routers/index'));
app.use('/api', require('./server/routers/api'));



app.listen(3001, (err) => {
  console.log('server is running on http://localhost:3001')
})