import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as ImagePicker from 'react-native-image-picker';

const Profilephoto = () => {
  const [resource, setResource] = useState(
    'https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg',
  );

  const chooseFile = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log(response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Error While Fetching Image: ', response.error);
        } else {
          setResource(response.assets[0].uri);
          console.log(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <View
      style={{
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={{uri: resource}}
        style={{
          resizeMode: 'contain',
          width: 150,
          height: 150,
          borderWidth: 2,
          borderRadius: 100,
          borderColor: 'black',
        }}
      />
      <TouchableOpacity style={{}} onPress={chooseFile}>
        <LinearGradient
          colors={['rgb(245,165,229)', 'rgb(161,234,241)']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
          locations={[0, 1]}
          style={{
            top: -50,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'black',
            justifyContent: 'center',
            left: 45,
            width: 30,
            height: 30,
            position: 'absolute',
          }}>
          <Image
            source={require('../../assets/camera.png')}
            style={{resizeMode: 'contain', width: 20, height: 20}}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Profilephoto;

const styles = StyleSheet.create({});
