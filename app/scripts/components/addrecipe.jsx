var $ = require('jquery');
var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');
var exampleRecipe = require('../models/models.js').exampleRecipe;
var exampleRecipeCollection = require('../models/models.js').exampleRecipeCollection;

class AddContainer extends React.Component{
  constructor(props){
    super(props);

    var newRecipe = new models.Recipe();
    var storageList = new models.IngredientCollection();

    this.addTitle = this.addTitle.bind(this);

    this.state = {
      newRecipe:newRecipe,
      storageList:storageList,
      exampleRecipeCollection:exampleRecipeCollection,
      recipeTitle:newRecipe.get('name')
    }
  }
  addIngredient(ingredient){
    console.log('clicked');
  }
  addRecipe(e){
    e.preventDefault();
    console.log('triggered');
  }
  // handleRecipeTitle(e){
  //   this.setState({recipeTitle: e.target.value});
  // }
  addTitle(title){
    var recipe = this.state.newRecipe;
    recipe.addName(title);
    this.setState({
      newRecipe:recipe,
      recipeTitle:recipe.get('name')
    })
    console.log(this.state);
  }
  render(){
    console.log(this.state);
    return(
      <Container>
        <AddRecipe addRecipe={this.addRecipe}
          addTitle = {this.addTitle}
          addIngredient={this.addIngredient}/>
        <AddDisplay recipeTitle={this.state.recipeTitle}/>
        <AddRecipeList storageList={this.state.storageList}/>
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
      <div className="col-sm-8 add-recipe">
        <form>
          <div className="form-group">

            <label htmlFor="recipe-title">
              Recipe Title
            </label>
            <input id="recipe-title" className="form-control"
              placeholder="Recipe Title"
            />
            <button className="btn"
              onClick={
              (e)=>{
                var $title = $('#recipe-title').val();
                e.preventDefault();
                this.props.addTitle($title);
              }}>
              Add/Edit Title
            </button>
            <br></br>
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
            <br></br>
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

class AddDisplay extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="col-sm-4">
        <h2>Current Recipe:{this.props.recipeTitle}</h2>
      </div>
    )
  }
}

class AddRecipeList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    return(
      <ul className ="col-sm-4">
        Recipe List Placeholder
      </ul>
    )
  }
}

module.exports = {
  AddContainer
};
