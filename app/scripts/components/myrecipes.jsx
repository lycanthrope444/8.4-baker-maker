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
      recipeList: exampleRecipeCollection,
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
  toggleMode(){
    var calc = $('.recipe-calculator').slideToggle();
    var add = $('.add-recipe').slideToggle();
  }
  addRecipe(){
    console.log('triggered');
  }
  render(){
    console.log(this.state);
    return(
      <Container>
        <RecipeList recipeList={this.state.recipeList}/>
        <RecipeCalculator
          adjustRecipe={this.adjustRecipe}
          exampleRecipe={this.state.recipe}
          handleServings={this.handleServings}
          servingSize = {this.state.servingSize}
        />
        <ToggleMode toggleMode={this.toggleMode}/>
        <AddRecipe addRecipe={this.addRecipe}/>
      </Container>
    )
  }
}

class RecipeList extends React.Component{
  render(){
    console.log(this.props);
    var recipeList = this.props.recipeList.toJSON();
    console.log(recipeList);
    var displayList = recipeList.map(function(item, index){
      return (
        <li key={index}>
          {item.name}
          <button className="btn">
            Select Recipe
          </button>
        </li>
      )
    });
    return(
      <div>
        RecipeList PlaceHolder
        {displayList}
      </div>
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

class ToggleMode extends React.Component{
  render(){
    return(
      <button className ="btn" onClick={this.props.toggleMode}>
        Add Another Recipe
      </button>
    )
  }
}

class AddRecipe extends React.Component{
  render(){
    return(
      <div className="add-recipe">
        Add Recipe Placeholder
      </div>
    )
  }
}

module.exports ={
  MyRecipes
}
