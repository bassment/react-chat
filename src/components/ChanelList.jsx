import React from 'react';
import Chanel from './Chanel.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class ChanelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'chanels': [
        'Sport',
        'Science'
      ]
    };
  }

  render() {
    var chanelNodes = this.state.chanels.map((chanel, i) => {
      return (
        <Chanel  key={i} chanel={chanel} />
      );
    });

    return (
      <Card style={{flexGrow: 1}}>
        <List>{chanelNodes}</List>
      </Card>
    );
  }
}

export default ChanelList;
