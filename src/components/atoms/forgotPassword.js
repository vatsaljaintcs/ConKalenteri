import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Forgot Password?</Text>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:50,
        marginBottom:20
    },
    text:{
        color:'#000'
    }
})