import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import About from './screens/About'
import Dashboard from './screens/Dashboard'
import Score from './screens/Score'
import Trips from './screens/Trips'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Score" component={Score} />
                <Stack.Screen name="Trips" component={Trips} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
