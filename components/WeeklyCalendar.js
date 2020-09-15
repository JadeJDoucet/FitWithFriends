import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';

export default function WeeklyCalendar(props) {
    // This will use props to set the day clicked, but will use date function to set current day
    // Current day will have different color
    const [calDay, setCalDay] = React.useState('mon');
    
    function getDay(day) {
      if (day === calDay) {
        return styles.selectedDay;
      } else {
        return styles.calendarDay;
      }
    }

    return (
      <ScrollView style={styles.calendarWeek} horizontal>
        <TouchableOpacity style={getDay('sun')} onPress={() => setCalDay('sun')}>
            <Text>Sun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getDay('mon')} onPress={() => setCalDay('mon')}>
            <Text>Mon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getDay('tue')} onPress={() => setCalDay('tue')}>
            <Text>Tues</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getDay('wed')} onPress={() => setCalDay('wed')}>
            <Text>Wed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getDay('thur')} onPress={() => setCalDay('thur')}>
            <Text>Thurs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getDay('fri')} onPress={() => setCalDay('fri')}>
            <Text>Fri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={getDay('sat')} onPress={() => setCalDay('sat')}>
            <Text>Sat</Text>
        </TouchableOpacity>
    </ScrollView>
        );
}

const styles = StyleSheet.create({
  calendarDay: {
    // This will be a paper-like box with a workout
    height: 50,
    width: 70,
    padding: 5,
    margin: 1,
    alignItems: 'center',
    backgroundColor: Colors.main,
  },
  calendarWeek: {
    // This will be a horizontal stream, side scrolling eventually
    flexDirection: 'row',
    paddingTop: 5,
  },
  selectedDay: {
    height: 50,
    width: 70,
    padding: 5,
    margin: 1,
    alignItems: 'center',
    backgroundColor: Colors.selected,
  }
})