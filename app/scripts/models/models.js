var Backbone = require('backbone');

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

});

var milk = new Ingredient({name:'milk'});
var bread = new Ingredient({name:'bread'});
var eggs = new Ingredient({name:'eggs'});

var exampleIngredientCollection = new IngredientCollection();
exampleIngredientCollection.add(milk);
exampleIngredientCollection.add(bread);
exampleIngredientCollection.add(eggs);

var exampleRecipe = new Recipe({name: 'french toast', ingredients: exampleIngredientCollection});

module.exports = {
  Ingredient: Ingredient,
  IngredientCollection:IngredientCollection,
  Recipe:Recipe,
  User: User,
  exampleRecipe: exampleRecipe
};
