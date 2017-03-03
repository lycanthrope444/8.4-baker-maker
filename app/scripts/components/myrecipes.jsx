var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');
var exampleRecipe = require('../models/models.js').exampleRecipe;

class MyRecipes extends React.Component{
  constructor(props){
    super(props);
    var serve = exampleRecipe.attributes.servingSize;
    // console.log(this);
    this.adjustRecipe = this.adjustRecipe.bind(this);
    this.handleServings = this.handleServings.bind(this);

    this.state={
      recipe: exampleRecipe,
      servingSize: serve
    }
  }
  adjustRecipe(){
    // console.log(this.state.recipe);
  }
  handleServings(e){
    e.preventDefault();
    this.setState({servingSize: e.target.value});
  }
  render(){
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
      <div>
        <div>
          Makes
          <input onChange={this.props.handleServings} value={this.props.servingSize} />
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
      <div>
        {displayList}
      </div>
    )
  }
}

module.exports ={
  MyRecipes
}
