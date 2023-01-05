import {StyleSheet, View,useWindowDimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../components/atoms/logo';
import AppName from '../components/atoms/appname';
import LogoBg from '../components/atoms/logowithbg';
import InputBox from '../components/molecules/inputbox';
import FooterLogin from '../components/atoms/footerlogin';
import SignInDetailBox from '../components/molecules/inputbox';

const Login = () => {

 

  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;
  return (
    <View style={styles.container}>
       <LinearGradient
       colors={['rgb(245,165,229)', 'rgb(161,234,241)']}
       start={{ x: 0, y: 0 }} 
       end={{ x: 0.5, y: 0.4 }} 
    
        style={{
         
          height: hgth*1,width:wid*1,alignItems:'center',justifyContent:'center'}}
      >
       
      <LogoBg data={{flex:0.4}}/>
      
      <SignInDetailBox data={{flex:0.6}} />
      </LinearGradient>
    
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {

  },
});
