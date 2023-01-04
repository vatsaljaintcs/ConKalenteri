import { StyleSheet, Text, View,TextInput } from 'react-native'
import React ,{useState} from 'react'

const InputTitle = ({data,onChangeValue,detail,errorMessage,onSetError}) => {
 
  
  return (
    <View style={styles.container}>
       <Text style={styles.txtheader}>{data.title}</Text>
      <TextInput 
      placeholder={data.placeholder}
      keyboardType={data.keyboard}
      style={styles.inputbox}
      secureTextEntry={data.type}
      placeholderTextColor='lightgrey'
      value={detail}
      onChangeText={(text) => onChangeValue(text)}
      onFocus={() => onSetError('')}
     
      />
      <Text style={{color:'red'}}>{errorMessage}</Text>
    </View>
  )
}

export default InputTitle

const styles = StyleSheet.create({
    container:{
     marginBottom:0,
   
    },
    txtheader:{
        fontSize:13,
        color:'#000',
        marginVertical:0
    },
    inputbox:{
      borderBottomColor:'lightgrey',
      borderBottomWidth:1,
      marginVertical:0
        
    }
})