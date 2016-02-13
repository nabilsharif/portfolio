'use strict';

require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route, DefaultRoute, RouteHandler } from 'react-router';

import routes from './routes';

var css = require("!style!css!autoprefixer!sass!../styles/main.scss");

ReactDOM.render(routes, document.getElementById("app"));


