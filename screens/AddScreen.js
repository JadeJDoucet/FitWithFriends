import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import WeeklyCalendar from '../components/WeeklyCalendar';
import Colors from '../constants/Colors';

export default function AddScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.preview}>
          <Text>Today's Workout:</Text>
          <Image
              source={require('../assets/images/robot-prod.png')}
              style={styles.welcomeImage}
            />
          <WeeklyCalendar />
      </View>
      <View>
        <Text>This will be routine options</Text> 
        <TouchableOpacity onPress={handlePreview()}>
          <Image
              source={require('../assets/images/robot-prod.png')}
              style={styles.welcomeImage}
            />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function handlePreview() {
  // This will do something, pick a thumbnail or something
  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      contentContainer: {
        paddingTop: 5,
        alignItems:'center',
      },
      welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        borderRadius: 50,
      },
      preview: {
        backgroundColor: Colors.secondary,
        flex: 1,
        height: 162,
        width: 350,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }
});
