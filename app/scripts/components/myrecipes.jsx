var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');

class MyRecipes extends React.Component{
  constructor(props){
    super(props);
    var recipe = new models.Recipe();

    this.state={
      recipe: recipe
    }
  }
  render(){
    return(
      <Container>
        <RecipeCalculator />
      </Container>
    )
  }
}

class RecipeCalculator extends React.Component{
  render(){
    return(
      <div>
        <div>
          Makes
          <input />
          servings
          <button>Adjust Recipe</button>
        </div>
        <div>
          Ingredients Table
        </div>
      </div>
    )
  }
}
module.exports ={
  MyRecipes
}
