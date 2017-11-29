import React from 'react';

class PeopleInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ConfirmationCard text="Insert people" onAnswerConfirm={() => {}} />;
  }
}

const mapStateToProps = state => ({
  people: state.declaration.get('people'),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleInput);
