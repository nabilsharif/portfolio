// Run server using ES6/ES7

require("babel-core/register")({
  presets: [
    'es2015', 'stage-0'
  ]
});

require('babel-polyfill');

var app = require('./server');
