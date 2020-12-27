import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RNSpeedometer from 'react-native-speedometer'
import { Ionicons } from '@expo/vector-icons'

export default function Dashboard({ navigation }) {
    const [value, setValue] = useState(80)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {' '}
                <Ionicons
                    name="speedometer-outline"
                    size={25}
                    color="grey"
                ></Ionicons>{' '}
                Summary Gauge
            </Text>
            <RNSpeedometer value={value} size={200} style={styles.gauge} />

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Score')}
                >
                    <Text style={styles.buttonTxt}>My Driver Score</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Trips')}
                >
                    <Text style={styles.buttonTxt}>My Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={styles.buttonTxt}>About</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.carPicture}
                source={require('../assets/car.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    title: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttons: {
        marginTop: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#2a7b9b',
        width: 100,
        height: 70,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTxt: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    carPicture: {
        width: null,
        resizeMode: 'contain',
        height: 220,
        alignItems: 'flex-end',
    },
})
