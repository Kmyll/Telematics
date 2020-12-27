import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MyTrips from './components/tripData'
import { Ionicons } from '@expo/vector-icons'

export default function Trips() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {' '}
                <Ionicons
                    name="analytics-outline"
                    size={25}
                    color="grey"
                ></Ionicons>{' '}
                My trips details
            </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.cardContainer}
            >
                {MyTrips.map((trips) => (
                    <View
                        key={trips.id}
                        style={
                            trips.type === 'Business'
                                ? {
                                      backgroundColor: '#fff',
                                      borderRadius: 5,
                                      borderLeftWidth: 4,
                                      borderLeftColor: '#2a7b9b',
                                      marginBottom: 10,
                                      padding: 5,
                                  }
                                : {
                                      backgroundColor: '#fff',
                                      borderRadius: 5,
                                      borderLeftWidth: 4,
                                      borderLeftColor: '#00baad',
                                      marginBottom: 10,
                                      padding: 5,
                                  }
                        }
                    >
                        <View style={styles.flexCard}>
                            <View style={styles.text}>
                                <Text
                                    style={styles.card}
                                    style={
                                        trips.type === 'Business'
                                            ? {
                                                  color: '#2a7b9b',
                                                  marginBottom: 10,
                                              }
                                            : {
                                                  color: '#00baad',
                                                  marginBottom: 10,
                                              }
                                    }
                                >
                                    {trips.type === 'Business' ? (
                                        <Ionicons
                                            name="briefcase-outline"
                                            size={15}
                                            color="#2a7b9b"
                                        ></Ionicons>
                                    ) : (
                                        <Ionicons
                                            name="person-add-outline"
                                            size={15}
                                            color="#00baad"
                                        ></Ionicons>
                                    )}{' '}
                                    {trips.type}
                                </Text>
                                <Text style={styles.card}>
                                    Date: {trips.date}
                                </Text>
                                <Text style={styles.card}>
                                    From: {trips.startTime} to {trips.endTime}
                                </Text>
                            </View>

                            <Ionicons
                                name="chevron-forward-circle-outline"
                                size={25}
                                color="grey"
                            ></Ionicons>
                        </View>
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
    },
    title: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    arrow: {
        backgroundColor: 'green',
    },
    cardContainer: {
        marginVertical: 10,
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {},
})
