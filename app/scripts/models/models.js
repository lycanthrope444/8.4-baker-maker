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
    ingredients: new IngredientCollection()
  },
  idAttribute:'objectId'
});


var User = Backbone.Model.extend({
  idAttribute:'objectId',
  urlRoot: function(){
    return parse.BASE_API_URL + '/users';
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

var exampleRecipe = new Recipe({name: 'french toast', servingSize: 4, ingredients: exampleIngredientCollection});
//
// End of demo Data


module.exports = {
  Ingredient: Ingredient,
  IngredientCollection:IngredientCollection,
  Recipe:Recipe,
  User: User,
  exampleRecipe: exampleRecipe
};
