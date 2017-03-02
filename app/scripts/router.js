var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'login',

  },
  login:function(){
    ReactDOM
  }
});

var appRouter = new AppRouter();

module.exports = {
  appRouter: appRouter
};
