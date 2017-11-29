import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInputContainer from './cards/ConfirmationCard/PeopleInput/PeopleInputContainer';
import MoreThanOne from './MoreThanOne';
import OnlyOne from './OnlyOne';
import { getDeclarationPeople } from '../../reducers';
import { getTotalPeople } from '../../model/configurationApi';

class QuestionAnswerContainer extends React.Component {
  render() {
    return (
      <View>
        <PeopleInputContainer />;
        {getTotalPeople(this.props.people) > 1 ? <MoreThanOne /> : <OnlyOne />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer,
);
