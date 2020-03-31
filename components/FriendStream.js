import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import StreamItem from '../components/StreamItem';

const names = ['Extreme Core', 'Extreme Chest', 'Get Fit Quick', 'Sweat It Out'];

export default function FriendStream(props) {
    return (
      <ScrollView style={styles.workoutStream1} horizontal>
      {names.map((name, i)=>(
        <StreamItem routineName={name} key={i}/>
      ))}
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