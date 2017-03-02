var React = require('react');
var Backbone = require('backbone');

var User = require('../models/models.js').User;
var Container = require('./layout.jsx').Container;

class Login extends React.Component{
  constructor(props){
    super(props);

    this.loginUser = this.loginUser.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handlePasswordLogin = this.handlePasswordLogin.bind(this);

    this.state = {
      user: "username",
      password: "password"
    }
  }
  handleUserLogin(e){
    console.log(e.target.value);
  }
  handlePasswordLogin(e){
    console.log(e.target.value);
  }
  loginUser(){
    console.log('clicked');
    Backbone.history.navigate('myrecipes', {trigger:true});
  }
  render(){
    return (
      <Container>
        <LoginForm
          loginUser={this.loginUser}
          handleUserLogin={this.handleUserLogin}
          handlePasswordLogin={this.handlePasswordLogin}
        />
      </Container>
    )
  }
}

class LoginForm extends React.Component{
  render(){
    return(
      <form>
        <div className ="form-group">
          <label htmlFor ="username-login" >username</label>
          <input className = "form-control" onChange={this.props.handleUserLogin}
            id="username-login" placeholder="Username"
          />
        </div>
        <div className ="form-group">
          <label htmlFor ="password-login" >Password</label>
          <input className = "form-control" onChange={this.props.handlePasswordLogin}
            id="password-login" placeholder="Password"
          />
        </div>
        <button onClick={
            (e)=>{
              e.preventDefault();
              this.props.loginUser();
            }}className="btn">
            Submit
        </button>
      </form>
    )
  }
}

module.exports = {
  Login
}
