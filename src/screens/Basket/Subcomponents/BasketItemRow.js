import React from 'react';
import { View, Text } from 'react-native';

class BasketItemRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headerCategoryName, categoryName, headerDuty, duty } = this.props;
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0, 0.1)',
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {headerCategoryName
          ? <Text style={{ width: '65%', fontFamily: 'open_sans_bold' }}>
              {headerCategoryName}
            </Text>
          : <Text style={{ width: '65%', fontFamily: 'open_sans_regular' }}>
              {categoryName}
            </Text>}
        <View
          style={{
            width: '35%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          {headerDuty
            ? <Text style={{ paddingRight: 20, fontFamily: 'open_sans_bold' }}>
                {headerDuty}
              </Text>
            : <Text
                style={{ paddingRight: 15, fontFamily: 'open_sans_regular' }}
              >
                {`CHF ${duty}`}
              </Text>}
        </View>
      </View>
    );
  }
}

export default BasketItemRow;
