import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

class Chanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ListItem>
        {this.props.chanel}
      </ListItem>
    );
  }
}

export default Chanel;
