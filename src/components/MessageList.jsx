import React from 'react';
import Message from './Message.jsx';
import Radium from 'radium';
import mui from 'material-ui';

var {Card, List} = mui;

@Radium
class MessageList extends React.Component {
  constructor(props) {
    super(props);
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
        <Message key={i} message={message} />
      );
    });

    return (
      <Card style={{flexGrow: 2, marginLeft: 30}}>
        <List><div style={styles.messages}>{messageNodes}</div></List>
      </Card>
    );
  }
}

var styles = {
  messages: {
    ':hover': {
      color: "green"
    },
  }
}

export default MessageList;
