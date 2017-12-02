import React from 'react';

const LargeAmountInput = ({}) => (
  <View>
    <TextInput style={[ownStyles.textInput, { flex: 0.5 }]} placeholder="" />
  </View>
);

const ownStyles = StyleSheets.create({
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    flex: 0.3,
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'roboto_regular',
  },
});

export default LargeAmountInput;
