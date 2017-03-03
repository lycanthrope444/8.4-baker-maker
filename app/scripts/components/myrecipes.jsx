var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');
var exampleRecipe = require('../models/models.js').exampleRecipe;

class MyRecipes extends React.Component{
  constructor(props){
    super(props);
    // var recipe = exampleRecipe;

    this.adjust = this.adjustRecipe.bind(this);

    this.state={
      recipe: exampleRecipe
    }
  }
  adjustRecipe(){
    console.log('clicked');
  }
  render(){
    return(
      <Container>
        <RecipeCalculator
          adjustRecipe={this.adjustRecipe}
          exampleRecipe={this.state.recipe}
        />
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
          <button
            className = "btn"
            onClick={
              (e)=>{
                e.preventDefault();
                this.props.adjustRecipe();
              }
            }>
            Adjust Recipe
          </button>
        </div>
        <div>
          <IngredientTable exampleRecipe = {this.props.exampleRecipe} />
        </div>
      </div>
    )
  }
}

class IngredientTable extends React.Component{
  render(){

    console.log(this.props);

    var ingredientList = this.props.exampleRecipe.attributes.ingredients.toJSON();
    console.log(ingredientList);

    // var 
    return(
      <div>
        Table Placeholder
      </div>
    )
  }
}

module.exports ={
  MyRecipes
}
