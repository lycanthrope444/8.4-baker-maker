var React = require('react');

var Container = require('./layout.jsx').Container;

// Deprecated

// class Public extends React.Component{
//   render(){
//     return(
//       <Container>
//         Public Place Holder
//       </Container>
//     )
//   }
// }

class Popular extends React.Component{
  render(){
    return(
      <Container>
        Popular Place Holder
      </Container>
    )
  }
}

class Favorite extends React.Component{
  render(){
    return(
      <Container>
        Favorite Place Holder
      </Container>
    )
  }
}

class Pantry extends React.Component{
  render(){
    return(
      <Container>
        Pantry Place Holder
      </Container>
    )
  }
}


module.exports ={
  // Public,
  Popular,
  Favorite,
  Pantry
}
