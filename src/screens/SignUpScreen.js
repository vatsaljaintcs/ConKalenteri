import {StyleSheet, View,useWindowDimensions,Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../components/atoms/logo';
import AppName from '../components/atoms/appname';
import LogoBg from '../components/atoms/logowithbg';
import InputBox from '../components/molecules/inputbox';
import SignUpDetailsBox from '../components/organisms/SignUpDetailsBox';
import Signupprofileimage from '../components/molecules/signupprofileimage';
import NavHeader from '../components/molecules/navheader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const Signup = () => {

    const items = [{id:1,title:'Email id',placeholder:'enter your email',type:false},
{id:2,title:'Name',placeholder:'enter your name',type:false},
{id:3,title:'Password',placeholder:'enter your password',type:true},
{id:4,title:'Contact Number',placeholder:'enter your password',type:false}
]

    const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;
  return (
    <KeyboardAwareScrollView style={styles.container}>
    <LinearGradient
    colors={['#ca9de0', '#72d1db']}
    start={{x: 0.0, y: 0.0}}
   end={{x: 1, y: 0.1}}
   locations={[0,  1]}
     style={{
      
       height: hgth*1,width:wid*1,justifyContent:'center'}}
   >
     <NavHeader data={{flex:0.05,header:'Sign Up'}} />
   <Signupprofileimage data={{flex:0.25}} />
 
   <SignUpDetailsBox data={{flex:0.75}} />
   </LinearGradient>
 
 </KeyboardAwareScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
    
    }
})