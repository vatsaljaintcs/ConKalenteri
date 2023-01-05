import { StyleSheet, Text, View ,useWindowDimensions,Image} from 'react-native'
import React from 'react'
import Logo from './logo'
import AppName from './appname'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

const EventTopHeader = () => {
    const hgth = useWindowDimensions().height;
    const wid = useWindowDimensions().width;
  return (
    <View style={{margin:10}}>

<Icon name='arrow-back' size={28} color="#fff"  style={{position:'absolute'}} />
    

   
    </View>
  )
}

export default EventTopHeader

const styles = StyleSheet.create({

})