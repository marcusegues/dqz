import React from 'react';
import { connect } from 'react-redux';
import ConfirmationCard from './cards/ConfirmationCard/ConfirmationCard';

class PeopleInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ConfirmationCard text="Insert People" onAnswerConfirm={() => {}} />;
  }
}

const mapStateToProps = state => ({
  people: state.declaration.get('people'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInput);
