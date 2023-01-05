import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventDetailedFooterBox = ({data}) => {
  const activityList = [
    {
      id: 1,
      name: 'Singing',
      path: require('../../assets/singing2.jpeg'),
    },
    {
      id: 2,
      name: 'Dancing',
      path: require('../../assets/dancing.jpeg'),
    },
    {
      id: 3,
      name: 'Comedy',
      path: require('../../assets/comdey.jpeg'),
    },
    {
      id: 4,
      name: 'Music',
      path: require('../../assets/singing2.jpeg'),
    },
    {
      id: 5,
      name: 'Games',
      path: require('../../assets/dancing.jpeg'),
    },
  ];
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: data.flex,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
      }}>
      <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 0.5}}>
        <View style={{margin: 20}}>
          <Text
            style={{
              color: '#000',
              marginBottom: 5,
              fontSize: 25,
              fontWeight: '600',
            }}>
            Sound Spirit Fest
          </Text>
          <Text
            style={{
              color: 'rgb(245,165,229)',
              fontSize: 20,
              fontWeight: '600',
            }}>
            Music
          </Text>
        </View>
      </View>

      <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 0.5}}>
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
            <Icon
              name="calendar-month-outline"
              size={20}
              color="#000"
              style={{marginRight: 10}}
            />
            <Text style={{color: '#000'}}>
              Date: <Text style={{fontWeight: 'bold'}}>20 August 2020</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
            <Icon
              name="clock-time-seven-outline"
              size={20}
              color="#000"
              style={{marginRight: 10}}
            />
            <Text style={{color: '#000'}}>
              Time:{' '}
              <Text style={{fontWeight: 'bold'}}>06:00 PM to 10:00 PM</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 0.5}}>
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 5}}>
            <Text style={{color: '#000'}}>
              Type: <Text style={{fontWeight: 'bold'}}>Live Perfomance</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              marginTop: 5,
            }}>
            <Text style={{color: '#000'}}>Activities: </Text>
            <Text style={{color: 'rgb(245,165,229)'}}>View All</Text>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <FlatList
              horizontal={true}
              data={activityList}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <Image
                      source={item.path}
                      style={{
                        resizeMode: 'cover',
                        width: 90,
                        height: 90,
                        borderRadius: 10,
                      }}
                    />

                    <Text style={{color: '#000', marginTop: 2}}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>

      <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 0.5}}>
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 10}}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 14}}>
              Click on Interested to stay updated about this event.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
            <View style={{flexDirection: 'column', flex: 1, padding: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 30,
                }}>
                <Icon name="thumb-up" size={40} color="#000" style={{}} />
                <Text
                  style={{
                    marginLeft: 10,
                    color: 'rgb(245,165,229)',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  255
                </Text>
              </View>
              <Text style={{marginLeft: 10}}>
                People have shown interest recently
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1.3,
                  borderRadius: 7,
                  margin: 10,
                  alignItems: 'center',
                  borderColor: 'rgb(245,165,229)',
                  backgroundColor: '#fff',
                }}>
                <Text
                  style={{
                    color: 'rgb(245,165,229)',
                    padding: 8,
                    fontSize: 18,
                    fontWeight: '600',
                  }}>
                  Interested
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>



      <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 0.5}}>
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
          
            <Text style={{color: '#000',fontWeight:'900',fontSize:16}}>
              Note: 
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 0}}>
           
            <Text style={{color: '#000'}}>
            Click on Interested to stay updated about this event.
            Click on Interested to stay updated about this event.
            Click on Interested to stay updated about this event.
            </Text>
          </View>
        </View>
      </View>


    </View>
  );
};

export default EventDetailedFooterBox;

const styles = StyleSheet.create({});
