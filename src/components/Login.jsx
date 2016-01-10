import React, {PropTypes} from 'react';
import Actions from '../actions';

import { Card, CardText, RaisedButton } from 'material-ui';

export default class Login extends React.Component {

  onClick() {
    Actions.login(this.props.history);
  }

  render() {
    return (
      <Card style={{
        maxWidth: '800px',
        margin: '30px auto',
        padding: '50px',
      }}>

        <CardText style={{
          textAlign: 'center',
        }}>
          To start chatting away, please log in with your Google account.
        </CardText>

        <RaisedButton style={{
          display: 'block',
        }} onClick={this.onClick.bind(this)}
        label="Log in with Google" primary={true} />

      </Card>
    );
  }
}
