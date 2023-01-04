import {
  StyleSheet,
  Text,
  View,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import InputTitle from '../molecules/inputwithtitle';
import Check from '../atoms/checkbox';
import ForgotPassword from '../atoms/forgotPassword';
import ButtonAtom from '../atoms/buttonAtom';
import FooterLogin from '../atoms/footerlogin';
import SignUpTermsCheck from '../atoms/sigupterms';

import PhoneCountry from '../molecules/phonenumbercountry';

const ForgotDetailsBox = ({data}) => {
  const [emaildetail, setEmailDetail] = useState('');

  const [emailerror, setEmailError] = useState('');

  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;

  return (
    <KeyboardAvoidingView
   
      style={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
        width: wid * 1,
        flex: data.flex,
      }}>
      <View
        style={{
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',

        }}>
        <Image
          source={require('../../assets/forgotpass.png')}
          style={{
            resizeMode: 'contain',
            width: 300,
            height: 280,
            margin: 20,
            alignSelf: 'center',
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            lineHeight: 25,
            marginHorizontal: 25,
            marginVertical: 25,
            fontSize: 16,
            color: '#000',
          }}>
          Please Enter Your Email Address. You will recieve a link to create new
          password
        </Text>
      </View>
      <View style={{flex: 0.3, justifyContent: 'center', margin: 30}}>
        <InputTitle
          detail={emaildetail}
          onChangeValue={newValue => setEmailDetail(newValue)}
          errorMessage={emailerror}
          onSetError={err => setEmailError(err)}
          data={{
            id: 1,
            title: 'Email id',
            placeholder: 'enter your email',
            type: false,
            keyboard: 'email-address',
          }}
        />

        {/*  
  <Text>{emaildetail}</Text>
  <Text>{passworddetail}</Text> */}

        <ButtonAtom
          data={{title: 'SUBMIT'}}
          check={{emaildetail}}
          onSetEmailError={err => setEmailError(err)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotDetailsBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 30,
  },
});
