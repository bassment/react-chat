import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ListItem
        leftAvatar={<Avatar
          src="http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/64/Frankenstein-icon.png" />}>
        {this.props.message}
      </ListItem>
    );
  }
}

export default Message;
