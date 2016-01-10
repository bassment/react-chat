import React from 'react';
import { Link } from 'react-router';
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
      styles.backgroundColor = '#b2ebf2';
    }

    return (
      <Link to={'/chat/' + this.props.channel.key}>
        <ListItem style={styles}>
          {this.props.channel.name}
        </ListItem>
      </Link>
    );
  }
}

export default Channel;
