import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default function AddScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.thumbail}>
          <Text>Pick a thumbnail</Text>
        <TouchableOpacity onPress={handleThumbnail()}>
          <Image
              source={require('../assets/images/robot-prod.png')}
              style={styles.welcomeImage}
            />
        </TouchableOpacity>
      </View>
      <View>
        <Text>This will be routine options</Text> 
      </View>
    </ScrollView>
  );
}

function handleThumbnail() {
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
      thumbail: {
        backgroundColor: 'lightgrey',
        borderRadius: 50,
        flex: 1,
        height: 150,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }
});
