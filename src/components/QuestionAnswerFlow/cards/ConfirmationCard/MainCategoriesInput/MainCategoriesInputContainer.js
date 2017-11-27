import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInput from './PeopleInput';
import { getDeclarationPeople } from '../../../../../reducers';

class MainCategoriesInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCategories: this.props.mainCategories,
    };

  }

  handleAddMainCategory(mainCategory) {
    this.setState({
      mainCategories: this.state.mainCategories.add(mainCategory)
    });
  }

  handleRemoveMainCategory() {
    this.setState({
      mainCategories: this.state.mainCategories.delete(mainCategory)
    });
  }

  componentWillReceiveProps(nextProps) {

  }

  handleAnswerConfirm() {

  }

  handleAnswer(quantityPeople) {

  }

  render() {
    return (

    );
  }
}

const mapStateToProps = state => ({
  mainCategories: getDeclarationMainCategories(state),
});

const mapDispatchToProps = dispatch => ({
  onSetMainCategories: mainCategories =>
    dispatch({ type: 'DECLARATION_SET_MAIN_CATEGORIES', mainCategories }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MainCategoriesInputContainer
);
