import React from 'react';
import PeopleInput from 'PeopleInput';
import MoreThanOne from 'MoreThanOne';
import OnlyOne from 'OnlyOne';

class AlternativeFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current = 0;
    }
  }

  setCurrentCard(current) {
    this.setState({
      current
    })
  }

  render() {
    <View>
      <PeopleInput current={this.props.current} setCurrentCard={this.setCurrentCard}/>;
      {getTotalPeople(people) > 1 ? <MoreThanOne /> : <OnlyOne />}
    </View>;
  }
}
