var React = require('react');

var Container = require('./layout.jsx').Container;
var models = require('../models/models.js');
var exampleRecipe = require('../models/models.js').exampleRecipe;
var exampleRecipeCollection = require('../models/models.js').exampleRecipeCollection;

class RecipeContainer extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      recipeList: exampleRecipeCollection
    }
  }
  render(){
    return (
      <Container>
        <RecipeList
          recipeList={this.state.recipeList}
          selectRecipe={this.selectRecipe}
        />
      </Container>
    )
  }
}


class RecipeList extends React.Component{
  render(){
    console.log(this.props);
    function selectRecipe(item){
      // console.log('clicked');
      // this.props.selectRecipe(item);
    }
    var self = this;
    var recipeList = this.props.recipeList.toJSON();
    var displayList = recipeList.map(function(item, index){
      return (
        <li key={index}>
          <a href="#">
            {item.name}
          </a>
        </li>
      )
    });
    return(
      <div className="recipe-list">
        RecipeList PlaceHolder
        {displayList}
      </div>
    )
  }
}

module.exports = {
  RecipeContainer
};
