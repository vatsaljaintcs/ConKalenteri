import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventCard = ({event}) => {
  const wid = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/eventImage.jpeg')}
        style={{
          resizeMode: 'cover',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: '100%',
          height: 170,
        }}
      />
      <View style={{padding: 10}}>
        <Text style={{color: '#000', fontSize: 17, fontWeight: '500'}}>
          {event.name}-{' '}
          <Text style={{color: 'rgb(245,165,229)'}}>{event.type}</Text>
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Icon
            name="calendar-month-outline"
            size={20}
            color="#000"
            style={{marginRight: 10}}
          />
          <Text style={{color: '#000'}}>Date: {event.date}</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Icon
            name="clock-time-seven-outline"
            size={20}
            color="#000"
            style={{marginRight: 10}}
          />
          <Text style={{color: '#000'}}>
            Time: {event.starttime} to {event.endtime}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 20,
  },
});
