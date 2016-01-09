import React from 'react';
import { ListItem } from 'material-ui';
import Actions from '../actions';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    Actions.channelOpened(this.props.channel);
  }

  render() {
    let styles = {};

    if (this.props.channel.selected) {
      styles.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem
        style={styles}
        onClick={this.onClick.bind(this)}>
        {this.props.channel.name}
      </ListItem>
    );
  }
}

export default Channel;
