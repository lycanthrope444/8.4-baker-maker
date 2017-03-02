var React = require('react');

var User = require('../models/models.js').User;
var Container = require('./layout.jsx').Container;

class Login extends React.Component{
  constructor(props){
    super(props);
    this.loginUser = this.loginUser.bind(this);

    this.state = {
      user: "username",
      password: "password"
    }
  }
  loginUser(){
    console.log('clicked');
  }
  render(){
    return (
      <Container>
        <LoginForm loginUser={this.loginUser} />
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
          <input className = "form-control" id="username-login" placeholder="Username" />
        </div>
        <div className ="form-group">
          <label htmlFor ="password-login" >Password</label>
          <input className = "form-control" id="password-login" placeholder="Password" />
        </div>
        <button onClick={
            (e)=>{
              e.preventDefault();
              this.props.loginUser();
            }
          }
            className="btn">Submit</button>
      </form>
    )
  }
}

module.exports = {
  Login
}
