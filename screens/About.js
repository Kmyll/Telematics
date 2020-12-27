import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function About() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                <Ionicons
                    name="people-outline"
                    size={25}
                    color="grey"
                ></Ionicons>{' '}
                About Us
            </Text>
            <Text style={styles.reply}>
                We are, and this application is here to help you check, analyse
                and correct your score, in order to drive safer and enhance your
                score
            </Text>
            <Text style={styles.question}>How it works?</Text>
            <Text style={styles.reply}>
                Driver Score uses the sensor data from the connected vehicle to
                calculate a driver score for each trip. This sensor data
                includes odometer reading, acceleration and speed. The driving
                performance for every trip is mapped to a score on a scale of
                0-100.
            </Text>
            <Text style={styles.question}>
                What is a good Telematics score?
            </Text>
            <Text style={styles.reply}>
                You should aim for a driving score of 70 or higher. Scores at
                this level will mean you are a safer driver, less likely to have
                an accident and less likely to have your policy cancelled due to
                a low score.
            </Text>
            <Text style={styles.question}>
                How is your driving score calculated?
            </Text>
            <Text style={styles.reply}>
                The overall Driver Score is calculated by taking the weighted
                average of all trip scores and the number of miles driven during
                each trip. New trips are included in the overall score the
                following day.
            </Text>
        </ScrollView>
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
    question: {
        textAlign: 'justify',
        marginVertical: 20,
        color: '#00baad',
        fontWeight: 'bold',
        fontSize: 15,
    },
    reply: {
        textAlign: 'justify',
    },
})
