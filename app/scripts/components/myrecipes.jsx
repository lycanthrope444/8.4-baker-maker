var $ = require('jquery');
var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');
var exampleRecipe = require('../models/models.js').exampleRecipe;
var exampleRecipeCollection = require('../models/models.js').exampleRecipeCollection;

class MyRecipes extends React.Component{
  constructor(props){
    super(props);
    var serve = exampleRecipe.attributes.servingSize;
    // console.log(this);
    this.adjustRecipe = this.adjustRecipe.bind(this);
    this.handleServings = this.handleServings.bind(this);

    this.state={
      recipe: exampleRecipe,
      servingSize: serve,
    }
  }
  adjustRecipe(){
    // console.log(this.state.recipe);
  }
  handleServings(e){
    e.preventDefault();
    this.setState({servingSize: e.target.value});
  }
  selectRecipe(item){
    console.log(this, item);
  }
  render(){
    // console.log(this.state);
    return(
      <Container>
        <RecipeCalculator
          adjustRecipe={this.adjustRecipe}
          exampleRecipe={this.state.recipe}
          handleServings={this.handleServings}
          servingSize = {this.state.servingSize}
        />

      </Container>
    )
  }
}

class RecipeCalculator extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props);

  }
  render(){
    return(
      <div className="recipe-calculator">
        <div>
          Makes
          <input onChange={this.props.handleServings} value={this.props.servingSize} />
          servings
        </div>
        <div>
          <IngredientTable
            exampleRecipe = {this.props.exampleRecipe}
            servingSize = {this.props.servingSize}
          />
        </div>
      </div>
    )
  }
}

class IngredientTable extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    // console.log(this.props);

    var ingredientList = this.props.exampleRecipe.attributes.ingredients.toJSON();
    var multiplier = (this.props.servingSize)/(this.props.exampleRecipe.attributes.servingSize);
    // console.log(ingredientList);

    var displayList = ingredientList.map(function(item, index){
      var adjustedQty = item.qty * multiplier;
      return(
        <li key={index} >
          <span>{adjustedQty}</span>
          <span>{item.measurement}</span>
          <span>{item.name}</span>
        </li>
      )
    })
    return(
      <div className="recipe-list">
        {displayList}
      </div>
    )
  }
}

// Deprecated

// class ToggleMode extends React.Component{
//   render(){
//     return(
//       <button className ="btn" onClick={this.props.toggleMode}>
//         Add Another Recipe
//       </button>
//     )
//   }
// }



module.exports ={
  MyRecipes
}
