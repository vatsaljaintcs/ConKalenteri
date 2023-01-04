import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ButtonAtom = ({data, check, onSetEmailError, onSetPasswordError}) => {
  const hgth = useWindowDimensions().height;
  const wid = useWindowDimensions().width;
  const handleSignIn = () => {
    var reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (reg.test(check.emaildetail) === false) {
      onSetEmailError('Email is Not Correct');
      return;
    }

    if (check.passworddetail == '') {
      onSetPasswordError('Please enter valid Password');
      return;
    }
    if (check.passworddetail.length <= 7) {
      onSetPasswordError('password should be of minimum 8 characters');
      return;
    } else {
      onSetEmailError('');
      onSetPasswordError('');
    }
  };
  return (
    <View style={{alignItems: 'center', marginVertical: 30}}>
      <TouchableOpacity style={styles.container} onPress={handleSignIn}>
        <LinearGradient
          colors={['rgb(245,165,229)', 'rgb(161,234,241)']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
          locations={[0, 1]}
          style={{
            borderRadius: 10,
            height: 55,
            width: wid * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.txt}>{data.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAtom;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  txt: {
    fontSize: 20,
    color: '#000',
  },
});
