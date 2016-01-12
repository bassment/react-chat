import React from 'react';
import ChatStore from '../stores/ChatStore';
import Actions from '../actions';

const MyRawTheme = require('../themes/MyRawTheme.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

import { AppBar, AppCanvas, FlatButton } from 'material-ui';

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {ChatStore.getState().user ?
          <AppBar title="ChatApp" iconElementRight={<FlatButton onClick={this.logout} label="Logout" />} />
          : <AppBar title="ChatApp" /> }
        {this.props.children}
      </div>
    );
  }

  logout = evt => Actions.logout(this.props.history);
}

export default App;
