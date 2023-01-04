import {StyleSheet, Text, View,Linking,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'expo-checkbox';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

const SignUpTermsCheck = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity 
     style={{}}
     onPress={() => setToggleCheckBox(!toggleCheckBox)}>
      <LinearGradient
      
        colors={toggleCheckBox ? ['rgb(245,165,229)', 'rgb(161,234,241)'] : ['#fff', '#fff'] }
     
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
          locations={[0, 1]}
          style={{
           
            justifyContent: 'center',
            width:15,
            height:15,
            borderWidth:1,
            borderColor:'lightgrey',
            alignItems:'center'
          
           
          }}
          
         
          >
            {toggleCheckBox &&
          <Icon name='checkmark' size={12} color="#fff"  style={{}} />
            }

       </LinearGradient> 
     
       </TouchableOpacity>

      <Text style={styles.label}>
        By signing you agree to the{' '}
        <Text style={styles.underline}
        onPress={() => 
        Linking.openURL('https://thecodingstudio.in/')}
        >Terms of service</Text> and{' '}
        <Text style={styles.underline}
          onPress={() => 
            Linking.openURL('https://thecodingstudio.in/about-us-2.html#')}
        >Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default SignUpTermsCheck;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
 alignItems:'flex-start',
    justifyContent: 'center',
  },
  checkbox: {
    
  },
  label: {
    marginHorizontal: 10,
    marginVertical:-5,
    color: '#000',
  },
  underline: {
    fontWeight: '700',
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
  },
});
