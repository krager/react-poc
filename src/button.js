import React, { Component } from 'react';

// When clicked, the button returns 
// (a) the time the button was pressed -- DONE! 
// (b) the number of times the button was pressed, and 
// (c) the message the component is displaying.

const Count = (props) => {
  return (
    <span>{props.counter}</span>
  )
}

class Button extends Component {  
    
//   handleClick = () => {
//     this.setState((prevState) => ({ 
//       counter: prevState.counter + 1 
//     }));

//     console.log('This button was pressed at ' + new Date().toLocaleTimeString() + '.');
//   }
  
  render() {
    return (
      <button onClick={this.props.onClickRef}>
          Click Me!
      </button>
    )
  }
}

export default Button;

{/*<p>This button was clicked <Count counter={this.state.counter}/> times.</p>*/}