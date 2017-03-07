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
    var storageList = newRecipe.get('ingredients');

    this.addTitle = this.addTitle.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.addRecipe = this.addRecipe.bind(this);

    this.state = {
      newRecipe:newRecipe,
      storageList:storageList,
      exampleRecipeCollection:exampleRecipeCollection,
      recipeTitle:newRecipe.get('name')
    }
  }
  addIngredient(title, quantity, unit){
    var additive = new models.Ingredient({name:title, qty: quantity, measurement:unit});
    var recipe = this.state.newRecipe;
    var updateList = this.state.storageList;

    console.log(additive);
    recipe.addIngredient(additive);
    updateList.add(additive);
    this.setState({newRecipe:recipe, storageList:updateList});
  }
  addRecipe(e){
    e.preventDefault();

    var recipeToAdd = this.state.newRecipe;
    var collection = this.state.exampleRecipeCollection;

    collection.add(recipeToAdd);
    this.setState({exampleRecipeCollection:exampleRecipeCollection});

    // testing outside collection here - ideally would update on a server
    exampleRecipeCollection.add(recipeToAdd);

    //To clear state
    var clearNewRecipe = new models.Recipe();
    // var clearStorageList = clearNewRecipe.get('ingredients');


    this.setState({
      newRecipe: clearNewRecipe,
      storageList: clearNewRecipe.get('ingredients'),
      recipeTitle: clearNewRecipe.get('name')
    });
  }
  addTitle(title){
    var recipe = this.state.newRecipe;
    recipe.addName(title);
    this.setState({
      newRecipe:recipe,
      recipeTitle:recipe.get('name')
    })
  }
  render(){
    return(
      <Container>
        <AddRecipe addRecipe={this.addRecipe}
          addTitle = {this.addTitle}
          addIngredient={this.addIngredient}
          storageList={this.state.storageList}
          recipeTitle={this.state.recipeTitle}
        />
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
      <div>
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
              <input className="form-control" id="qty"
                placeholder="Quantity" />
              <input className="form-control" id="units"
                placeholder="Units" />
              <button className="btn"
                onClick={
                  (e)=>{
                    e.preventDefault();
                    var $ing = $('#ingredient');
                    var $qty = $('#qty');
                    var $units = $('#units');

                    this.props.addIngredient($ing.val(), $qty.val(), $units.val());

                    $ing.val('');
                    $qty.val('');
                    $units.val('');
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
        <AddDisplay storageList={this.props.storageList}
          recipeTitle={this.props.recipeTitle}
        />
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
        <AddRecipeList storageList={this.props.storageList}/>
      </div>
    )
  }
}

class AddRecipeList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    console.log(this.props.storageList.toJSON());
    var factor = this.props.storageList.toJSON();
    var displayList = factor.map(function(item, index){
      return(
        <li key={index}>
          {item.qty}
          {item.measurement}
          {item.name}
        </li>
      )
    });
    return(
      <ul className ="col-sm-4">
        {displayList}
      </ul>
    )
  }
}

module.exports = {
  AddContainer
};
