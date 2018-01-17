// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { CameraRoll } from 'react-native';
// $FlowFixMe
import { takeSnapshotAsync } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';
import type { Navigation } from '../../../types/generalTypes';
import { ReceiptAfterPayment } from '../../Receipts/ReceiptAfterPayment';

type DownloadIconProps = {
  navigation: Navigation,
};

export class DownloadIcon extends React.Component<{}, {}> {
  async capture() {
    const snapshot = await takeSnapshotAsync(this.image, {
      format: 'png',
      quality: 1,
      result: 'file',
    });
    await CameraRoll.saveToCameraRoll(snapshot, 'photo');
  }

  render() {
    return (
      <Touchable
        onPress={() => {
          this.capture();
        }}
      >
        <MaterialIcons
          ref={ref => {
            this.image = ref;
          }}
          name="get-app"
          size={moderateScale(28)}
          color={MAIN_RED}
        />
      </Touchable>
    );
  }
}
