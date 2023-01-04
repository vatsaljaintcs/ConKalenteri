import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profilephoto from '../atoms/profilephoto'

const Signupprofileimage = ({data}) => {
  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:data.flex,}}>
  
      <Profilephoto />
    </View>
  )
}

export default Signupprofileimage

const styles = StyleSheet.create({})