import {
  StyleSheet,
  Text,
  View,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import InputTitle from './inputwithtitle';
import Check from '../atoms/checkbox';
import ForgotPassword from '../atoms/forgotPassword';
import ButtonAtom from '../atoms/buttonAtom';
import FooterLogin from '../atoms/footerlogin';

const SignInDetailBox = ({data}) => {
  const [emaildetail, setEmailDetail] = useState('');
  const [passworddetail, setPasswordDetail] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [emailerror, setEmailError] = useState('');

  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
        width: wid * 1,
        flex: data.flex,
      }}>
      <View style={styles.container}>
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
          }}
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
          }}
          errorMessage={passworderror}
        />

        <Check />

        <ForgotPassword />
        <ButtonAtom
          data={{title: 'SIGN IN'}}
          check={{emaildetail, passworddetail}}
          onSetEmailError={err => setEmailError(err)}
          onSetPasswordError={err => setPasswordError(err)}
        />
        <FooterLogin />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInDetailBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 30,
  },
});
