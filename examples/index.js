
import React, { Component, View } from 'react-native';
import { Provider } from 'react-redux/native';

import store from './store';
import SelectExample from './SelectExample';
import NavigationView from './NavigationView';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{() => <NavigationView />}
			</Provider>
		);
	}
}
