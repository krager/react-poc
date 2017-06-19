import React, { Component } from 'react';
import CardPanel from './CardPanel.js';
import './App.css';


// The message should be set via a property passed in by a parent container component.
// If no property is passed in for the message, a default message should be displayed.
const Message = (props) => {
  if (props.textRef) {
    return <h1>{props.textRef}</h1>
  }
  return <h1>No Message Exists</h1>
}

// When clicked, the button returns 
// (a) the time the button was pressed -- DONE! 
// (b) the number of times the button was pressed, and 
// (c) the message the component is displaying.
class Button extends Component {    
  render() {
    return (
      <button onClick={this.props.onClickRef}>
          Click Me!
      </button>
    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Hello world!",
      cards: [
          { title: 'Recipe: Tomato Soup With Chickpeas and Lentils',
            author: 'Digestive Health Team',
            published: '2017-06-14T09:00:13' 
          }
      ]
    };
  };

  consoleLogMessages = () => {
    this.setState((prevState) => {
      var updatedCounter = prevState.counter + 1;
      console.log('This button was pressed at ' + new Date().toLocaleTimeString() + '.');
      console.log('This button was pressed ' + updatedCounter + ' of times.');
      var currentMessage = prevState.message;
      if (currentMessage === null) {
        currentMessage = "No Message Exists"
      }
      console.log('The message displayed is ' + currentMessage)
      return ({
        counter: updatedCounter,
        message: currentMessage
      });
    });
  };

  render() {
    return (
      <div>
        <Message textRef={this.state.message} />
        <Button  onClickRef={this.consoleLogMessages} />
        <CardPanel cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
