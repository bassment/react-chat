import React from 'react';
import mui from 'material-ui';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const MyRawTheme = require('../themes/MyRawTheme.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
@connectToStores
class App extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    var Chat = (
    <div>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        maxWidth: 1200,
        width: '100%',
        margin: '30px auto 30px',
      }}>
        <ChannelList />
        <MessageList />
      </div>
      <MessageBox />
    </div>);

    return (
      <div>
        <AppBar title="ChatApp" />
        {this.props.user ? Chat : <Login />}
      </div>
    );
  }
}

export default App;
