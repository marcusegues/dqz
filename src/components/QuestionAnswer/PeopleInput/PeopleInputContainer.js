import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInput from './PeopleInput';
import PeopleInputAnswer from './PeopleInputAnswer';
import { getDeclarationPeople } from '../../../reducers';
import * as fromModelApi from '../../../model/configurationApi';

class PeopleInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.people,
    };
    this.handleAddAdult = this.handleAddAdult.bind(this);
    this.handleSubtractAdult = this.handleSubtractAdult.bind(this);
    this.handleAddMinor = this.handleAddMinor.bind(this);
    this.handleSubtractMinor = this.handleSubtractMinor.bind(this);
    this.handleAnswerConfirm = this.handleAnswerConfirm.bind(this);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
  }

  handleAddAdult() {
    this.setState({
      people: fromModelApi.addAdult(this.state.people),
    });
  }

  handleSubtractAdult() {
    this.setState({
      people: fromModelApi.subtractAdult(this.state.people),
    });
  }

  handleAddMinor() {
    this.setState({
      people: fromModelApi.addMinor(this.state.people),
    });
  }

  handleSubtractMinor() {
    this.setState({
      people: fromModelApi.subtractMinor(this.state.people),
    });
  }

  handleAnswerConfirm() {
    const { onAdultsSetQuantity, onMinorsSetQuantity, people } = this.props;
    const adults = fromModelApi.getAdultPeople(this.state.people);
    const minors = fromModelApi.getMinorPeople(this.state.people);
    onAdultsSetQuantity(adults);
    onMinorsSetQuantity(minors);
    this.props.onAnswerConfirm();
  }

  getQuestionComponent() {
    return (
      <PeopleInput
        people={this.state.people}
        onAnswerConfirm={this.handleAnswerConfirm}
        onAddAdult={this.handleAddAdult}
        onSubtractAdult={this.handleSubtractAdult}
        onAddMinor={this.handleAddMinor}
        onSubtractMinor={this.handleSubtractMinor}
        text={this.props.text}
      />
    );
  }

  getAnswerComponent() {
    return <PeopleInputAnswer people={this.props.people} />;
  }

  render() {
    console.log(this.props.current);
    return (
      <View>
        {this.props.current === 1
          ? this.getQuestionComponent()
          : this.getAnswerComponent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({
  onAdultsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_ADULTS_SET_QUANTITY', quantity }),
  onMinorsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_MINORS_SET_QUANTITY', quantity }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInputContainer,
);
