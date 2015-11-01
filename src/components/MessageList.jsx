import React from 'react';
import Message from './Message.jsx';
import Radium from 'radium';
import mui from 'material-ui';
import _ from 'lodash';
import Firebase from 'firebase';

var {Card, List} = mui;

@Radium
class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase('https://react-chat-app.firebaseio.com/messages');
    this.firebaseRef.on("child_added", (msg) => {
      if (this.state.messages[msg.key()]) {
        return;
      }

      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({
        messages: this.state.messages
      });
    });
    this.firebaseRef.on("child_removed", (msg) =>{
      let msgKey = msg.key();
      delete this.state.messages[msgKey];
      this.setState({
        messages: this.state.messages
      });
    });
  }

  render() {
    var messageNodes = _.values(this.state.messages).map((message, i) => {
      return (
        <Message key={i}  message={message.message} />
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
};

export default MessageList;
