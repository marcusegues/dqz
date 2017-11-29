import React from 'react';
import { connect } from 'react-redux';
import PeopleInput from './PeopleInput';
import MoreThanOne from './MoreThanOne';
import OnlyOne from './OnlyOne';
import { getTotalPeople } from '../../reducers';

class QuestionAnswerContainer extends React.Component {
  render() {
    <View>
      <PeopleInput />;
      {getTotalPeople(this.props.people) > 1 ? <MoreThanOne /> : <OnlyOne />}
    </View>;
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer,
);
