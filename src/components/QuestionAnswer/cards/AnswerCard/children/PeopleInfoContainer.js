import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getDeclarationPeople } from '../../../../../reducers';
import {
  getAdultPeople,
  getMinorPeople,
} from '../../../../../model/configurationApi';

const PeopleInfoContainer = ({ people }) => {
  const adults = getAdultPeople(people);
  const minors = getMinorPeople(people);
  return (
    <View>
      {adults ? <Text>{`${adults} Erwachsene`}</Text> : null}
      {minors ? <Text>{`${minors} Kinder (unter 17 Jahre)`}</Text> : null}
    </View>
  );
};

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInfoContainer
);
