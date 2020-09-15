import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const names = ['Extreme Core', 'Extreme Chest', 'Get Fit Quick', 'Sweat It Out'];

export default function WeeklyCalendar(props) {
    // This will use props to set the day clicked, but will use date function to set current day
    // Current day will have different color
    return (
      <ScrollView style={styles.workoutStream1} horizontal>
        <TouchableOpacity style={styles.workoutStreamItem}>
            <Text>Mon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workoutStreamItem}>
            <Text>Tues</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workoutStreamItem}>
            <Text>Wed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workoutStreamItem}>
            <Text>Thurs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workoutStreamItem}>
            <Text>Fri</Text>
        </TouchableOpacity>
    </ScrollView>
        );
}

const styles = StyleSheet.create({
  workoutStreamItem: {
    // This will be a paper-like box with a workout
    height: 50,
    width: 60,
    padding: 5,
    margin: 5,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  workoutStream1: {
    // This will be a horizontal stream, side scrolling eventually
    flexDirection: 'row',
  }
})