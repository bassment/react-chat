import React from 'react';
import mui from 'material-ui';
import MessageList from './MessageList.jsx';
import ChanelList from './ChanelList.jsx';
import MessageBox from './MessageBox.jsx';

const MyRawTheme = require('../themes/MyRawTheme.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AppBar title="ChatApp" />
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChanelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default App;
