import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInput from './PeopleInput';
import * as fromModelApi from '../../model/configurationApi';

class PeopleInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.people,
    };
    this.onAdultsChangeQuantity = this.onAdultsChangeQuantity.bind(this);
    this.onMinorsChangeQuantity = this.onMinorsChangeQuantity.bind(this);
    this.handleAnswerConfirm = this.handleAnswerConfirm.bind(this);
  }

  onAdultsChangeQuantity(quantityChange) {
    this.setState({
      people: fromModelApi.setAdultPeople(this.state.people, quantityChange),
    });
  }

  onMinorsChangeQuantity() {
    this.setState({
      people: fromModelApi.setMinorPeople(this.state.people, quantityChange),
    });
  }

  handleAnswerConfirm() {
    const {
      onAdultsSetQuantity,
      onMinorsSetQuantity,
      onAnswerConfirm,
    } = this.props;
    onAdultsSetQuantity(this.state.people.getAdultPeople());
    onMinorsSetQuantity(this.state.people.getMinorPeople());
    onAnswerConfirm();
  }

  render() {
    return <PeopleInput onAnswerConfirm={this.props.handleAnswerConfirm} />;
  }
}

const mapStateToProps = state => ({
  people: state.declaration.get('people'),
});

const mapDispatchToProps = dispatch => ({
  onAdultsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_ADULTS_SET_QUANTITY', quantity }),
  onMinorsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_MINORS_SET_QUANTITY', quantity }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInputContainer
);
