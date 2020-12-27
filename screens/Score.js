import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ScoreCards from './components/scoreData'
import { Ionicons } from '@expo/vector-icons'

export default function Score() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Ionicons
                    name="car-sport-outline"
                    size={25}
                    color="grey"
                ></Ionicons>{' '}
                Driver Score Detail
            </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                {ScoreCards.map((score) => (
                    <View key={score.id} style={styles.cardContainer}>
                        <Text style={(styles.card, styles.Subheader)}>
                            {score.title}:
                        </Text>
                        <Text style={(styles.card, styles.score)}>
                            {score.number}
                        </Text>
                        <Text style={styles.placeholder}>{score.tips}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 30,
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Subheader: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        color: '#00baad',
    },
    score: {
        fontWeight: 'bold',
        color: '#2a7b9b',
    },
    placeholder: {
        marginVertical: 5,
        textAlign: 'justify',
        fontSize: 12,
        color: 'grey',
    },
})
