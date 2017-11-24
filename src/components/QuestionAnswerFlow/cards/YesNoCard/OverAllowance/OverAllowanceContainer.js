import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import YesNoCard from '../YesNoCard';
import { getDeclarationPeople } from '../../../../../reducers';
import * as fromModelApi from '../../../../../model/configurationApi';

class OverAllowanceContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { people, onAnswerYes, onAnswerNo } = this.props;
    const totalPeople =
      fromModelApi.getAdultPeople(people) + fromModelApi.getMinorPeople(people);
    return (
      <YesNoCard
        onAnswerYes={onAnswerYes}
        onAnswerNo={onAnswerNo}
        text={`Übersteigt der Gesamtwert aller Waren CHF ${(totalPeople - 1) *
          300}?`}
      />
    );
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({
  setOverAllowance,
});

export default connect(mapStateToProps, null)(OverAllowanceContainer);
