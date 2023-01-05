import {
    StyleSheet,
    Text,
    View,
    TextInput,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
    FlatList
  } from 'react-native';
  import React, {useState} from 'react';
import EventCard from '../molecules/eventCard';
  

  
  const HomeScreenBox = ({data}) => {
    const [emaildetail, setEmailDetail] = useState('');
    const [passworddetail, setPasswordDetail] = useState('');
    const [passworderror, setPasswordError] = useState('');
    const [emailerror, setEmailError] = useState('');
  
    const hgth = useWindowDimensions().height;
    const wid = useWindowDimensions().width;

    const eventList = [ 
        {
        id:1,
        name:'Sound Spirit Music',
        type:'Music',
        date:'20 August 2020',
        starttime:'06:00 PM',
        endtime:'10:00 PM',
        image:'../../assets/eventImage.jpeg'
    },
    {
        id:2,
        name:'Happy Guests',
        type:'Flea Market',
        date:'20 August 2020',
        starttime:'06:00 PM',
        endtime:'10:00 PM',
        image:'../../assets/eventImage.jpeg'
    },
    {
        id:3,
        name:'Sound Spirit Music',
        type:'Music',
        date:'20 August 2020',
        starttime:'06:00 PM',
        endtime:'10:00 PM',
        image:'../../assets/eventImage.jpeg'
    }
   ,{
        id:4,
        name:'Sound Spirit Music',
        type:'MUSIC',
        date:'20 August 2020',
        starttime:'06:00 PM',
        endtime:'10:00 PM',
        image:'../../assets/eventImage.jpeg'
    },
]

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: '#fff',
          width: wid * 1,
          flex: data.flex,
        }}>
        {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <EventBox />
          <EventBox />
          <EventBox />
        </ScrollView> */}

        <FlatList
        data={eventList}
        style={styles.container} 
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        renderItem={({item}) => {
           return(
                <EventCard event={item} />
           )
        }}
        />

      </KeyboardAvoidingView>
    );
  };
  
  export default HomeScreenBox;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      margin: 20,
    },
  });
  