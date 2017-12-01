import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import LargeAmountPresentContainer from './LargeAmountPresent/LargeAmountPresentContainer';
import OverAllowanceContainer from './OverAllowance/OverAllowanceContainer';
import MainCategoriesContainer from './MainCategories/MainCategoriesContainer';
import { getDeclarationPeople } from '../../reducers';
import { getTotalPeople } from '../../model/configurationApi';

class QuestionAnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  setCurrent(number) {
    this.setState({
      current: number,
    });
  }

  render() {
    return (
      <View>
        <PeopleInputContainer
          current={this.state.current}
          onPress={() => this.setCurrent(1)}
          onAnswerConfirm={() => this.setCurrent(2)}
        />
      </View>
    );
  }
}

// <LargeAmountPresentContainer onPress={() => this.setCurrent(2)} />
// <OverAllowanceContainer onPress={() => this.setCurrent(3)} />
// <MainCategoriesContainer onPress={() => this.setCurrent(4)} />
const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer,
);
