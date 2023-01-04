import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const NavHeader = ({data}) => {
  return (
    <View style={{flex:data.flex,flexDirection:'row',margin:15,alignItems:'center',justifyContent:'center'}}>
    <Icon name='arrow-back' size={28} color="#000"  style={{left:0,position:'absolute'}} />
      <Text style={styles.header}>{data.header}</Text>
    </View>
  )
}

export default NavHeader

const styles = StyleSheet.create({
  header:{
    fontSize:24,
    textAlign:'center',
    color:'#000'
    
  }
})