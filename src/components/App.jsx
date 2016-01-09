import React from 'react';

const MyRawTheme = require('../themes/MyRawTheme.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

import { AppBar, AppCanvas } from 'material-ui';

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar title="ChatApp" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
