import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { getDeclarationVatReport, getDeclarationDutyReport } from '../reducers';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class UnderConstructionWithSums extends React.Component {
  componentDidMount() {
    this.props.onCalculateDues();
  }

  render() {
    const { vatReport, dutyReport } = this.props;
    return (
      <View style={style}>
        <Text>{`Zu bezahlender Betrag: ${vatReport.get('totalVat') +
          dutyReport.get('totalDuty')}`}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  vatReport: getDeclarationVatReport(state),
  dutyReport: getDeclarationDutyReport(state)
});

const mapDispatchToProps = dispatch => ({
  onCalculateDues: () => dispatch({ type: 'DECLARATION_CALCULATE_DUES' })
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UnderConstructionWithSums
);
