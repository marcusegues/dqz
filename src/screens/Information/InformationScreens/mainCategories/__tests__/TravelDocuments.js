import React from 'react';
import { shallow } from 'enzyme';
import { TravelDocuments } from '../TravelDocuments';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('TravelDocuments', () => {
  test('TravelDocuments renders as expected', () => {
    const wrapper = shallow(<TravelDocuments />);
    expect(wrapper).toMatchSnapshot();
  });
  test('TravelDocuments renders as expected with language', () => {
    const wrapper = shallow(
      <TravelDocuments
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('TravelDocuments renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <TravelDocuments
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  // test('TravelDocuments renders as expected with language and with dive()', () => {
  //   //   const wrapper = shallow(
  //   //     <TravelDocuments
  //   //       navigation={{ dispatch: clickFn }}
  //   //       i18n={{ language: 'de', t: 'test' }}
  //   //     />
  //   //   );
  //   //   const render = wrapper.dive();
  //   //   render
  //   //     .find(<AppInfoLink text="test" onPress={clickFn} />)
  //   //     .forEach(child => {
  //   //       child.simulate('press');
  //   //     });
  //   //   expect(clickFn.mock.calls.length).toBe(1);
  //   // });
});
