import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import SignInDetailBox from '../components/molecules/inputbox';
import NavHeader from '../components/molecules/navheader';
import HomeScreenBox from '../components/organisms/HomeScreenBox';
const HomeScreen = () => {
  
     

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
       
     
      
    <NavHeader data={{flex:0.07,header:'ConKalenteri',back:false,}} />
      <HomeScreenBox data={{flex:0.93}} />
      </LinearGradient>
    
    </View>
  );
  
}

export default HomeScreen

const styles = StyleSheet.create({})