import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SuggestedStream(props) {
    return (
        <ScrollView style={styles.workoutStream1} horizontal>
          <View style={styles.workoutStreamItem}>
            <Text>Killer Core</Text>
          </View>
          <View style={styles.workoutStreamItem}>
            <Text>Deadly Chest</Text>
          </View>
          <View style={styles.workoutStreamItem}>
            <Text>Full Body Breakdown</Text>
          </View>
          <View style={styles.workoutStreamItem}>
            <Text>Booty Builder</Text>
          </View>
        </ScrollView>
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
  workoutStream1: {
    // This will be a horizontal stream, side scrolling eventually
    flexDirection: 'row',
  
  }
})