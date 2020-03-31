import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import FriendStream from '../components/FriendStream';
import SuggestedStream from '../components/SuggestedStream';
//md-calendar

function getTodaysWorkout() {
  return "Full Body Workout" // Ability to click this text and choose from dropdown our workouts, or create one
} 


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        <Text>Suggested Routines</Text>
        <SuggestedStream />

        <Text>From Your Friends</Text>
        <FriendStream />

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Today's workout: {getTodaysWorkout()}</Text> 
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  workoutStreamItem: {
    // This will be a paper-like box with a workout
    height: 150,
    width: 150,
    padding: 5,
    margin: 5,
    backgroundColor: 'grey',
  },
  workoutStream1: {
    // This will be a horizontal stream, side scrolling eventually
    flexDirection: 'row',

  }
});
