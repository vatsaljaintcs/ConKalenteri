import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import React from 'react';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import ForgotPassword from './src/screens/ForgotPassword';
import LocationScreen from './src/screens/LocationScreen';
import SafeViewAndroid from './src/components/atoms/SafeAreaViewAndroid';

const App = () => {
  return (
    // <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    //  <Signup />
    // </SafeAreaView>
  
  <View>
    <Signup />
  </View>
    );
};

export default App;

// const styles = StyleSheet.create({});
