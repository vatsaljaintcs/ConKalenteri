import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FooterLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintxt}>Don't have an Account? <Text style={styles.inner}>Sign Up</Text></Text>
    </View>
  )
}

export default FooterLogin

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',margin:0
    },
    maintxt:{
        color:'#000'
    },
    inner:{
        color:'#ca9de0'
    }
})