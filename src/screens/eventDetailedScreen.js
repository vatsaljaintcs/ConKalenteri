import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import SignInDetailBox from '../components/molecules/inputbox';
import ButtonAtom from '../components/atoms/buttonAtom';
import LinearGradient from 'react-native-linear-gradient';
import LogoBg from '../components/atoms/logowithbg';
import EventTopHeader from '../components/atoms/eventTopHeader';
import EventDetailedFooterBox from '../components/molecules/EventDetailedFooterBox';
const EventDetailedScreen = () => {
  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;
  return (
 

    <ScrollView style={styles.container}>
        <View style={{flex: 0.4}}>
      <ImageBackground
        source={require('../assets/eventImage.jpeg')}
        style={{width: '100%', height: 350, flex: 0.4}}>
        <EventTopHeader />
      </ImageBackground>
      </View>

      <EventDetailedFooterBox data={{flex: 0.6}} />
    </ScrollView>

  );
};

export default EventDetailedScreen;

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    flexDirection: 'column',
  },
});
