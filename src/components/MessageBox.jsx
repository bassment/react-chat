import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Firebase from 'firebase';

var {Card} = mui;

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    this.firebaseRef = new Firebase('https://react-chat-app.firebaseio.com/messages');
  }

  render () {
    return (
      <Card style={{
          maxWidth: 1200,
          margin: '30px auto',
          padding: 30
        }}>
        <textarea
          value={this.state.message }
          onChange={this._handleInputChange.bind(this)}
          onKeyUp={this._handleEnterPress.bind(this)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            marginHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }} />
      </Card>
    );
  }

  _handleInputChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  _handleEnterPress(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      e.preventDefault();
      this.firebaseRef.push({
        message: this.state.message
      });
      this.setState({
        message: ''
      });

      console.log('Sent a new message: ', e.target.value);
    }
  }
}

export default MessageBox;
