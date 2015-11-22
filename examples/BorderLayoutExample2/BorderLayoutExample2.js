
import React, { Component, View, Text } from 'react-native';

import { Fill, Top, Left, Right, Bottom } from 'react-native-layout/lib/BorderLayout';
import Center from 'react-native-layout/lib/Center';

export default class BorderLayoutExample2 extends Component {
	render() {
		return (
			<Fill>
				<Top style={{ flexDirection: 'row' }}>
					<Center style={{ height: 44 }}>
						<Text style={{ fontSize: 18 }}>Hallo</Text>
					</Center>
				</Top>
				<Bottom style={{ height: 50 }} />

				<Left style={{ width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }} />
				<Right style={{ width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightblue' }} />

				<View style={{ flex: 1, borderColor: 'gray', borderWidth: 1, backgroundColor: 'lightgreen' }} />
			</Fill>
		);
	}
}
