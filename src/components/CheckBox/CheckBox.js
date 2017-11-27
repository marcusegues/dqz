import React from 'react';
import { View } from 'react-native';
import { MAIN_RED } from '../../styles/colors';
import Touchable from 'react-native-platform-touchable';

class CheckBox extends React.Component {
	render() {
		const { checked } = this.props;

		return (
			<Touchable
				style={{
					height: 17,
					width: 17,
					borderRadius: 8.5,
					borderColor: 'black',
					borderWidth: 1,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				onPress={this.props.onPress}
			>
				{checked ? (
					<View
						checked={checked}
						style={{
							height: 12,
							width: 12,
							borderRadius: 6,
							backgroundColor: MAIN_RED,
						}}
					/>
				) : (
					<View />
				)}
			</Touchable>
		);
	}
}
export default CheckBox;
