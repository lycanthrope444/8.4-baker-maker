var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var login = require('./components/login.jsx').Login;
var Public = require('./components/demolink.jsx').Public;
var demolinks = require('./components/demolink.jsx');

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'login',
    'myrecipes':'myRecipes',
    'public':'publicRecipes',
    'popular':'popularRecipes',
    'favorite':'favoriteRecipes',
    'pantry':'pantry'
  },
  login:function(){
    ReactDOM.render(
      React.createElement(login),
      document.getElementById('app')
    );
  },
  myRecipes:function(){
    ReactDOM.render(
      React.createElement(login),
      document.getElementById('app')
    );
  },
  publicRecipes:function(){
    ReactDOM.render(
      React.createElement(Public),
      document.getElementById('app')
    );
  },
  popularRecipes:function(){
    ReactDOM.render(
      React.createElement(demolinks.Popular),
      document.getElementById('app')
    );
  },
  favoriteRecipes:function(){
    ReactDOM.render(
      React.createElement(demolinks.Favorite),
      document.getElementById('app')
    );
  },
  pantry:function(){
    ReactDOM.render(
      React.createElement(demolinks.Pantry),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = {
  appRouter: appRouter
};
