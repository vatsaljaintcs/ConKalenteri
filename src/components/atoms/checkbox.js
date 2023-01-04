import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'expo-checkbox';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

const Check = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
     <TouchableOpacity 
 
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
      <Text style={styles.label}>Remember Me?</Text>
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
 alignItems:'center',
 
  },
  checkbox: {
    
  },
  label: {
    marginHorizontal: 10,
    marginVertical:-5,
    color: '#000',
  },
});
