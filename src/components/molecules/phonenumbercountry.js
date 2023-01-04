import { StyleSheet, Text, View,TextInput, TouchableOpacity,useWindowDimensions,} from 'react-native'
import React ,{useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {CountryPicker} from "react-native-country-codes-picker";
import { SafeAreaView } from 'react-native-safe-area-context';


const PhoneCountry = ({data,onChangeValue,detail,errorMessage,onSetError}) => {

  const hgt = useWindowDimensions().height;

    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
  
  return (
    <SafeAreaView>
    <View style={styles.container}>
       <Text style={styles.txtheader}>{data.title}</Text>
       <View style={{flexDirection:'row',alignItems:'center',borderBottomColor:'lightgrey',
      borderBottomWidth:1,}}>
       <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width:60,
            height: 30,
            backgroundColor: 'white',
            borderRightColor:'lightgrey',
            borderRightWidth:1,
            alignItems:'center',
            justifyContent:'center'
        }}
      >
        <Text style={{
            color: 'black',
            fontSize: 12
        }}>
            {countryCode} <Icon name='caretdown' size={12} color="#000" />
        </Text>
      </TouchableOpacity>

<CountryPicker
        show={show}
        
        onBackdropPress={() => setShow(false)}
        searchMessage={'Sorry not found'}
        inputPlaceholder={'Search your country'}
        style={{   
          modal: {
          height: hgt*0.75,
          borderTopLeftRadius:20,
          borderTopRightRadius:20
        },
      
           textInput: {
          width:80,
          margin:10   
              
          },
         
        }}
        enableModalAvoiding={false}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
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
      </View>
      <Text style={{color:'red'}}>{errorMessage}</Text>
    </View>
    </SafeAreaView>
  )
}

export default PhoneCountry

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
 
      marginVertical:0
        
    }
})