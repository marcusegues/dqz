// @flow

// $FlowFixMe
import { AsyncStorage } from 'react-native';

export const storeItemAsyncStorage = async (
  key: string,
  item: any
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(`@Dazit:${key}`, JSON.stringify(item));
    return true;
  } catch (error) {
    // Error saving data
  }
  return false;
};

export const fetchGenericDataAsyncStorage = async (
  key: string
): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(`@Dazit:${key}`);
    if (value !== null) {
      // eslint-disable-next-line no-console
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
