var express = require('express'),
  bodyParser = require('body-parser'),
  fs = require('fs'),
  app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var staticDir = __dirname + '/static';
console.log('Serving static files from', staticDir);
app.use(express.static(staticDir));

var port = Number(process.env.PORT || 3000);

app.listen(port, function () {
  console.log('server running at localhost:' + port + ', go refresh and see magic');
});

module.exports = app;
