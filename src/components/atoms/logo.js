 

import { View, Text,Image } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
        <Image 
      source={require('../../assets/logo3.png')}
     style={{resizeMode:'contain',margin:20}}
/>
    </View>
  )
}

export default Logo