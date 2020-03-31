import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function StreamItem(props) {
    return (
          <TouchableOpacity style={styles.workoutStreamItem}>
            <Text>{props.routineName}</Text>
          </TouchableOpacity>
        );
}


const styles = StyleSheet.create({
  workoutStreamItem: {
    // This will be a paper-like box with a workout
    height: 150,
    width: 150,
    padding: 5,
    margin: 5,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
})