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
  id:'_id'
});


var User = Backbone.Model.extend({

});

module.exports = {
  User: User
};
