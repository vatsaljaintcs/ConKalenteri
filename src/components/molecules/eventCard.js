import { StyleSheet, Text, View ,Image,useWindowDimensions} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const EventCard = ({data}) => {
    const wid = useWindowDimensions().width;
  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/eventImage.jpeg')}
        style={{resizeMode:'contain',borderTopLeftRadius:20,borderTopRightRadius:20,width:'100%',height:250}}
        />
      <View style={{padding:10,}}>
<Text style={{color:'#000',fontSize:17,fontWeight:'500'}}>Sound Spirit Music- 
<Text style={{color:'rgb(245,165,229)'}}>Music</Text></Text>
<View style={{flexDirection:'row',marginVertical:10}}>
<Icon name='calendar-month-outline' size={20} color="#000"  style={{marginRight:10}} />
<Text style={{color:'#000'}}>Date: 20 August 2020</Text>
</View>
<View style={{flexDirection:'row',marginBottom:10}}>
<Icon name='clock-time-seven-outline' size={20} color="#000"  style={{marginRight:10}} />
<Text style={{color:'#000'}}>Time: 06:00 PM to 10:00 PM</Text>
</View>
      </View>
    </View>
  )
}

export default EventCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
       borderTopStartRadius:20,
       borderTopEndRadius:20,
       borderBottomEndRadius:20,
       borderBottomStartRadius:20,
        backgroundColor:'white',
       elevation:5,
       marginBottom:20
    }
})