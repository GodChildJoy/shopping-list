import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import parser from 'body-parser';

// routes, endpoint
import itemsRoute from './routes/items';

/* eslint-disable no-console */

const port = 3001;
const app = express();
const compiler = webpack(config);
const items = [{
    title:"Ice Cream"
},{
    title:"Waffles",
    purchased:true
},{
    title:"Candy"
},{
    title:"Snarks",
    purchased:false
}];

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

// run items route
itemsRoute(app);
