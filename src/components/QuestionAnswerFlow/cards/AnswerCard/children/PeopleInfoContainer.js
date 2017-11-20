import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import * as fromModelApi from '../../../../../model/configurationApi';

class PeopleInfoContainer extends React.Component {
  render() {
    const adults = fromModelApi.getAdultPeople(this.props.people);
    const minors = fromModelApi.getMinorPeople(this.props.people);
    return (
      <View>
        {adults ? <Text>{`${adults} Erwachsene`}</Text> : null}
        {minors ? <Text>{`${minors} Kinder (unter 17 Jahre)`}</Text> : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  people: state.declaration.get('people'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInfoContainer
);
