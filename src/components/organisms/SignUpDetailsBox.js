import {
  StyleSheet,
  Text,
  View,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import InputTitle from '../molecules/inputwithtitle';
import Check from '../atoms/checkbox';
import ForgotPassword from '../atoms/forgotPassword';
import ButtonAtom from '../atoms/buttonAtom';
import FooterLogin from '../atoms/footerlogin';
import SignUpTermsCheck from '../atoms/sigupterms';

import PhoneCountry from '../molecules/phonenumbercountry';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUpDetailsBox = ({data}) => {
  const [emaildetail, setEmailDetail] = useState('');
  const [passworddetail, setPasswordDetail] = useState('');
  const [phonedetail, setPhoneDetail] = useState('');
  const [namedetail, setNameDetail] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [emailerror, setEmailError] = useState('');

  const [phoneerror, setPhoneError] = useState('');
  const [nameerror, setNameError] = useState('');

  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;

  return (
    <KeyboardAwareScrollView
      style={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
        width: wid * 1,
        flex: data.flex,
      }}>
      <View style={styles.container}>
        <InputTitle
          detail={namedetail}
          onChangeValue={newValue => setNameDetail(newValue)}
          onSetError={err => setNameError(err)}
          data={{
            id: 2,
            title: 'Name',
            placeholder: 'enter your name',
            type: true,
            keyboard: 'default',
          }}
          errorMessage={nameerror}
        />

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

        <PhoneCountry
          detail={phonedetail}
          onChangeValue={newValue => setPhoneDetail(newValue)}
          onSetError={err => setPhoneError(err)}
          data={{
            id: 2,
            title: 'Contact Number',
            placeholder: 'enter your phone number',
            type: true,
            keyboard: 'phone-pad',
          }}
          errorMessage={phoneerror}
        />

        

        <InputTitle
          detail={passworddetail}
          onChangeValue={newValue => setPasswordDetail(newValue)}
          onSetError={err => setPasswordError(err)}
          data={{
            id: 2,
            title: 'Password',
            placeholder: 'enter your password',
            type: true,
            keyboard: 'default',
          }}
          errorMessage={passworderror}
        />

        {/*  
  <Text>{emaildetail}</Text>
  <Text>{passworddetail}</Text> */}

        <SignUpTermsCheck />

        <ButtonAtom
          data={{title: 'SIGN UP'}}
          check={{emaildetail, passworddetail}}
          onSetEmailError={err => setEmailError(err)}
          onSetPasswordError={err => setPasswordError(err)}
        />
        <FooterLogin />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpDetailsBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 30,
  },
});
