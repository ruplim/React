"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//Add  etra parameter for clean URL
// http://localhost:9005/authors versus  http://localhost:9005/#/authors
//Router.run(routes, Router.HistoryLocation, function(Handler) {
Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});