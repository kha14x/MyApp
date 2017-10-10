import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
<<<<<<< HEAD
				<Text>So let me test this thing once again</Text>
				<Text>And by the way, my Nuclide IDE setup is over!</Text>
=======
				<Text>So let me test this thing once again!</Text>
				<Text>Hello world! Blah-blah-blah!</Text>
>>>>>>> b75079dd6325013eacdf32335f391666886479cb
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
