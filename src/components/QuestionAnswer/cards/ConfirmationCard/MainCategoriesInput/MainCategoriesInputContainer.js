import React from 'react';
import { connect } from 'react-redux';
import { getDeclarationMainCategories } from '../../../../../reducers';
import MainCategoriesInput from './MainCategoriesInput';

class MainCategoriesInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCategories: this.props.mainCategories,
    };
    this.handleAddMainCategory = this.handleAddMainCategory.bind(this);
    this.handleRemoveMainCategory = this.handleRemoveMainCategory.bind(this);
    this.handleToggleMainCategory = this.handleToggleMainCategory.bind(this);
    this.handleAnswerConfirm = this.handleAnswerConfirm.bind(this);
  }

  handleAddMainCategory(mainCategory) {
    this.setState({
      mainCategories: this.state.mainCategories.add(mainCategory),
    });
  }

  handleRemoveMainCategory(mainCategory) {
    this.setState({
      mainCategories: this.state.mainCategories.delete(mainCategory),
    });
  }

  handleToggleMainCategory(mainCategory) {
    if (this.state.mainCategories.has(mainCategory)) {
      this.handleRemoveMainCategory(mainCategory);
    } else {
      this.handleAddMainCategory(mainCategory);
    }
  }

  handleAnswerConfirm() {
    this.props.onSetMainCategories(this.state.mainCategories);
    this.props.onAnswerConfirm();
  }

  render() {
    return (
      <MainCategoriesInput
        mainCategories={this.state.mainCategories}
        onToggleMainCategory={this.handleToggleMainCategory}
        onAnswerConfirm={this.handleAnswerConfirm}
        text="Welche Art Waren führen Sie mit sich?"
      />
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
