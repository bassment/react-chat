import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'messages': [
        'Hello. how are you?',
        'Im fine.'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message, i) => {
      return (
        <div style={{color: 'green'}} key={i}>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
