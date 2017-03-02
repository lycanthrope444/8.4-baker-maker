var React = require('react');

class Container extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-md-12">
            <Header />
          </div>
        </div>
        <div className = "row">
          <div className = "col-sm-2">
            <SideBar />
          </div>
          <div className = "col-sm-10">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return (
      <div className ="header">
        <span>The kitchen is yours, chef!</span>
        <span>Baker Maker</span>
        <OptionPanel />
      </div>
    )
  }
}

class OptionPanel extends React.Component{
  render(){
    return (
      <div className="option-panel">
        Option Panel
      </div>
    )
  }
}

class SideBar extends React.Component{
  render(){
    return (
      <div className ="sidebar">
        <a href="#myrecipes">
          <div>
            My Recipes
          </div>
        </a>
        <a href="#public">
          <div>
            Public Recipes
          </div>
        </a>
        <a href="#popular">
          <div>
            Popular Recipes
          </div>
        </a>
        <a href="#favorite">
          <div>
            My Favorite Recipes
          </div>
        </a>
        <a href="#pantry">
          <div>
            My Pantry
          </div>
        </a>
      </div>
    )
  }
}

module.exports = {
  Container
};
