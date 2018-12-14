const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname,'/')))

app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'pug');


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

app.get('/', (req, res) => {
  res.render('index');
})



app.listen(3001, (err) => {
  console.log('server is running on http://localhost:3001')
})