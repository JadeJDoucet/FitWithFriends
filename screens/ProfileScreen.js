import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View>
        <Text>This will be a circular image</Text>
        <Image
            source={require('../assets/images/robot-prod.png')}
            style={styles.welcomeImage}
          />
      </View>
      <View>
        <Text>This will contain some information about your profile, maybe weekly breakdown</Text> 
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
    alignItems: 'center',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  welcomeImage: {
    borderRadius: 50,
    alignSelf: "center",
  },
});
