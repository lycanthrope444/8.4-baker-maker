var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parse = require('./setup');
var login = require('./components/login.jsx').Login;
var myRecipes = require('./components/myrecipes.jsx').MyRecipes;
var Public = require('./components/selectrecipe.jsx').RecipeContainer;
var addRecipe = require('./components/addrecipe.jsx').AddContainer;
var demolinks = require('./components/demolink.jsx');

var AppRouter = Backbone.Router.extend({
  initialize:function(){
    parse.setup({
      BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
    });
  },
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
      React.createElement(myRecipes),
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
      React.createElement(addRecipe),
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
