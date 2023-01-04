import { StyleSheet, Text, View,useWindowDimensions,Image ,ScrollView} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import NavHeader from '../components/molecules/navheader'
import SignInDetailBox from '../components/molecules/inputbox'
import ForgotDetailsBox from '../components/organisms/ForgotPasswordDetailsBox'

const ForgotPassword = () => {
    const hgth = useWindowDimensions().height;
    const wid = useWindowDimensions().width;
  return (
    <ScrollView style={styles.container}>
    <LinearGradient
    colors={['rgb(245,165,229)', 'rgb(161,234,241)']}
    start={{ x: 0, y: 0 }} 
    end={{ x: 0.5, y: 0.4 }} 
 
     style={{
      
       height: hgth*1,width:wid*1,justifyContent:'center'}}
   >
    
    <NavHeader data={{flex:0.07,header:'Forget Password'}} />
   
  
   <ForgotDetailsBox data={{flex:0.93}} />
   </LinearGradient>
 
 </ScrollView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})