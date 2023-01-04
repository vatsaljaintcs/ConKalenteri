import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const AppName = () => {
  return (
    <View>
     <Text style=
{styles.logoname}>ConKalenteri</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logoname:{
        fontSize:29,
        color:'#000',
        fontWeight:'300',
        marginTop:0,
        marginBottom:30
      }
})

export default AppName