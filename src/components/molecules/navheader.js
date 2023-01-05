import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../atoms/logo'

const NavHeader = ({data}) => {
  return (
    <View style={{flex:data.flex,flexDirection:'row',margin:15,alignItems:'center',justifyContent:'center'}}>
   {data.back && <Icon name='arrow-back' size={28} color="#000"  style={{left:0,position:'absolute'}} /> }
   {!data.back &&
  <Image 
  source={require('../../assets/logo3.png')}
  style={{resizeMode:'contain',marginHorizontal:10,width:40}}
  />
   }
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