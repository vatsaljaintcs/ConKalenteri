import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Login from './src/screens/LoginScreen';
import Signup from './src/screens/SignUpScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import LocationScreen from './src/screens/LocationScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventDetailedScreen from './src/screens/eventDetailedScreen';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
   <NavigationContainer>
 <EventDetailedScreen />
    </NavigationContainer>
     
    
  );
};

export default App;

const styles = StyleSheet.create({});
