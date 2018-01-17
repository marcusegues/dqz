// @flow
// $FlowFixMe
import { Dimensions } from 'react-native';

const { width, height }: { width: number, height: number } = Dimensions.get(
  'window'
);

const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

const scale = (size: number) => width / guidelineBaseWidth * size;
const verticalScale = (size: number) => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
