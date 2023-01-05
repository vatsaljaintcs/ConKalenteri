import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ForgotDetailsBox from '../components/organisms/ForgotPasswordDetailsBox';
import NavHeader from '../components/molecules/navheader';
import LocationBox from '../components/organisms/LocationBox';

const LocationScreen = () => {
    const hgth = useWindowDimensions().height;
    const wid = useWindowDimensions().width;
  return (
    <View style={styles.container}>
    <LinearGradient
    colors={['rgb(245,165,229)', 'rgb(161,234,241)']}
    start={{ x: 0, y: 0 }} 
    end={{ x: 0.5, y: 0.4 }} 
 
     style={{
      
       height: hgth*1,width:wid*1,justifyContent:'center'}}
   >
    
    <NavHeader data={{flex:0.07,header:'Location',back:true}} />
   
  
   <LocationBox data={{flex:0.93}} />
   </LinearGradient>
 
 </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})