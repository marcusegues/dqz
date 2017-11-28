import React from 'react';
import OverAllowance from 'OverAllowance';

class PeopleInput extends React.Component {
  constructor() {}

  render() {
    return (
      <ConfirmationCard text={'Insert people'} onAnswerConfirm={() => {}}>
        <AdultInputRow
          people={people}
          onAddAdult={onAddAdult}
          onSubtractAdult={onSubtractAdult}
        />
        <MinorInputRow
          people={people}
          onAddMinor={onAddMinor}
          onSubtractMinor={onSubtractMinor}
        />
      </ConfirmationCard>
    );
  }
}

const mapStateToProps = state => ({
  people: state.declaration.get('people'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInput);
