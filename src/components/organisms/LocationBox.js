import { StyleSheet, Text, View,TextInput,useWindowDimensions,KeyboardAvoidingView,TouchableOpacity ,Image} from 'react-native'
import React, { useState } from 'react'
import InputTitle from '../molecules/inputwithtitle'
import Check from '../atoms/checkbox'
import ForgotPassword from '../atoms/forgotPassword'
import ButtonAtom from '../atoms/buttonAtom'
import FooterLogin from '../atoms/footerlogin'
import SignUpTermsCheck from '../atoms/sigupterms'

import PhoneCountry from '../molecules/phonenumbercountry'

const LocationBox = ({data}) => {

  const [emaildetail,setEmailDetail]= useState('')
  
  const [emailerror,setEmailError] = useState('')


  
  
  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;


  return (
    <KeyboardAvoidingView style={{borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:'#fff',width:wid*1,flex:data.flex}}>
    
 <View style={{flex:2,}}>
    <Image
   source={require('../../assets/location.png')}
   style={{resizeMode:"contain",width:300,height:300,margin:20,alignSelf:'center'}}
   />
  </View>
  <View style={{flex:1,justifyContent:'flex-start'}}>
   <Text style={{fontSize:20,textAlign:'center',color:'#000',fontWeight:'500'}}>Current Location</Text>
<Text style={{textAlign:'center',marginBottom:0,lineHeight:30,margin:15,fontSize:17,color:'#000'}}>Cultue Tea Bar, BroadWay, New York. NY 10027 United States </Text>

</View>






<View style={{flex:1}}>

     <ButtonAtom data={{title:'SUBMIT'}} check={{emaildetail}}  
     
     onSetEmailError={(err) => setEmailError(err)}

     />
     <Text style={{fontSize:18,textAlign:'center',color:'#000',textDecorationColor:'#000',textDecorationStyle:'solid',textDecorationLine:'underline'}}>Skip</Text>
     </View>
 
    </KeyboardAvoidingView>
  )
}

export default LocationBox

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:30,
    

    }
})