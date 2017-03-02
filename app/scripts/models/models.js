var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({

});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient
});

var Recipe = Backbone.Model.extend({
  defaults:{
    ingredients:[]
  },
  idAttribute:'objectId'
});


var User = Backbone.Model.extend({

});

module.exports = {
  Ingredient: Ingredient,
  IngredientCollection:IngredientCollection,
  Recipe:Recipe,
  User: User
};
