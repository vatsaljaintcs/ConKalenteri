import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React from 'react'
import Logo from './logo'
import AppName from './appname'
import LinearGradient from 'react-native-linear-gradient';

const LogoBg = ({data}) => {
    const hgth = useWindowDimensions().height;
    const wid = useWindowDimensions().width;
  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:data.flex,}}>

  <Logo />
<AppName />
   
    </View>
  )
}

export default LogoBg

const styles = StyleSheet.create({

})