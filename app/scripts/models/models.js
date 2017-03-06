var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../setup');

// Models & Collections
var Ingredient = Backbone.Model.extend({

});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient
});

var Recipe = Backbone.Model.extend({
  defaults:{
    name : '',
    ingredients: new IngredientCollection()
  },
  idAttribute:'objectId',
  addRecipe: function(ingred){
    this.ingredients.add(ingred);
  },
  addName: function(entry){
    this.name = entry;
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  addRecipeToColl: function(recipe){
    this.add(recipe);
  }
});

//User info - almost completely lifted from the 8.4 Coffee Demo
var User = Backbone.Model.extend({
  idAttribute:'objectId',
  urlRoot: function(){
    return parse.BASE_API_URL + '/users';
  }
},{
  login: function(credentials, callback){
    var url = parse.BASE_API_URL + '/login?' + $.param(credentials);
    $.get(url).then(function(data) {
      var newUser = new User(data);
      User.store(newUser);
      callback(newUser);
    });
  },
  signup: function(creds){
    var newUser = new User(creds);
    newUser.save().then(function(){
      User.store(newUser);
    });
    return newUser;
  },
  store: function(user){
    localStorage.setItem('user', JSON.stringify(user.toJSON()));
  },
  current: function(){
    var user = localStorage.getItem('user');

    // if no user in local storage, bail
    if(!user){
      return false;
    }

    var currentUser = new User(JSON.parse(user));

    // If we don't have a token, bail
    if(!currentUser.get('sessionToken')){
      return false;
    }

    return currentUser;
  }
});


// Demo Data to make sure components are working
//
var milk = new Ingredient({name:'milk', qty: 1, measurement:'cup'});
var bread = new Ingredient({name:'bread', qty: 1, measurement:'slice'});
var eggs = new Ingredient({name:'eggs', qty: 1});

var exampleIngredientCollection = new IngredientCollection();
exampleIngredientCollection.add(milk);
exampleIngredientCollection.add(bread);
exampleIngredientCollection.add(eggs);

var anotherExampleIng = new IngredientCollection();
anotherExampleIng.add(eggs);

var exampleRecipe = new Recipe({name: 'french toast', servingSize: 4, ingredients: exampleIngredientCollection});
var anotherExample = new Recipe({name: 'scrambled eggs', servingSize: 1, ingredients: anotherExampleIng});

var exampleRecipeCollection = new RecipeCollection();
exampleRecipeCollection.add(exampleRecipe);
exampleRecipeCollection.add(anotherExample);
//
// End of demo Data


module.exports = {
  Ingredient: Ingredient,
  IngredientCollection:IngredientCollection,
  Recipe:Recipe,
  User: User,
  exampleRecipe: exampleRecipe,
  exampleRecipeCollection: exampleRecipeCollection
};
