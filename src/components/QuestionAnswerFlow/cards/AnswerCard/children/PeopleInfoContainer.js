import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getDeclarationPeople } from '../../../../../reducers';
import {
  getAdultPeople,
  getMinorPeople,
} from '../../../../../model/configurationApi';

class PeopleInfoContainer extends React.Component {
  render() {
    const adults = getAdultPeople(this.props.people);
    const minors = getMinorPeople(this.props.people);
    return (
      <View>
        {adults ? <Text>{`${adults} Erwachsene`}</Text> : null}
        {minors ? <Text>{`${minors} Kinder (unter 17 Jahre)`}</Text> : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  people: getDeclarationpeople(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInfoContainer
);
