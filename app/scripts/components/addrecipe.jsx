var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');
var exampleRecipe = require('../models/models.js').exampleRecipe;
var exampleRecipeCollection = require('../models/models.js').exampleRecipeCollection;

class AddContainer extends React.Component{
  constructor(props){
    super(props);

    var recipeTitle = "";
    var exampleRecipeCollection = exampleRecipeCollection;
    var storageList = new models.IngredientCollection();

    this.handleRecipeTitle = this.handleRecipeTitle.bind(this);

    this.state = {
      storageList:storageList,
      exampleRecipeCollection:exampleRecipeCollection,
      recipeTitle:recipeTitle
    }
  }
  addIngredient(ingredient){
    console.log('clicked');
  }
  addRecipe(e){
    e.preventDefault();
    console.log('triggered');
  }
  handleRecipeTitle(e){
    this.setState({recipeTitle: e.target.value});
  }
  render(){
    return(
      <Container>
        <AddRecipe addRecipe={this.addRecipe}
          handleRecipeTitle = {this.handleRecipeTitle}
          addIngredient={this.addIngredient}/>
      </Container>
    )
  }
}

class AddRecipe extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="add-recipe">
        <form>
          <div className="form-group">

            <label htmlFor="recipe-title">
              Recipe Title
            </label>
            <input id="recipe-title" className="form-control"
              placeholder="Recipe Title"
              onChange={this.props.handleRecipeTitle}
            />

            <label htmlFor="ingredient">
              Ingredients
            </label>
            <input className="form-control" id="ingredient"
              placeholder="Ingredient Name" />
            <input className="form-control"
              placeholder="Quantity" />
            <input className="form-control"
              placeholder="Units" />
            <button className="btn"
              onClick={
                (e)=>{
                  e.preventDefault();
                  this.props.addIngredient();
                }
              }>
              Add Ingredient
            </button>
            <button className="btn"
              onClick={
                this.props.addRecipe
              }>
              Finish Recipe
            </button>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = {
  AddContainer
};
