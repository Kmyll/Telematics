import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard ({ navigation }) {
	return (
		<View>
			<Text>I am dashboard</Text>
			<Text>Gauge goes here</Text>

			<View className="buttons">
				<TouchableOpacity className="button score" onPress={() => navigation.navigate('Score')}>
					<Text>My Driver Score</Text>
				</TouchableOpacity>
				<TouchableOpacity className="button trips" onPress={() => navigation.navigate('Trips')}>
					<Text>My Trips</Text>
				</TouchableOpacity>
				<TouchableOpacity className="button about" onPress={() => navigation.navigate('About')}>
					<Text>About</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
