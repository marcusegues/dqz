import React from 'react';
// $FlowFixMe
import { shallow } from 'enzyme';
import { InformationSubCategories } from '../InformationSubCategories';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('InformationSubCategories', () => {
  test('InformationSubCategories renders as expected', () => {
    const wrapper = shallow(<InformationSubCategories />);
    expect(wrapper).toMatchSnapshot();
  });
  test('InformationSubCategories renders as expected with language', () => {
    const wrapper = shallow(
      <InformationSubCategories
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  // test('InformationSubCategories renders as expected with language with dive()', () => {
  //   const wrapper = shallow(
  //     <InformationSubCategories
  //       navigation={{ state: { params: { onPress: clickFn } } }}
  //       i18n={{ language: 'de', t: 'test' }}
  //       infoCategories={categories}
  //     />
  //   );
  //   expect(wrapper.dive()).toMatchSnapshot();
  // });
});
