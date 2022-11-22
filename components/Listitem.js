import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth } from '../utils/Dimensions'

export default function Listitem({photo, title, subTitle, jogo, data}) {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom: 20,
    }}>
      <View style={{flexDirection:'row',alignItems:'center',flex:1, marginTop:5}} >
        <Image source={photo} style={{
          width:145,height:50,borderRadius:10,marginRight:8}} />
      </View>
      <View style={{width: windowWidth -290 }}>
        <Text numberOfLines={1} style  ={{color:'#000',fontSize:20, marginRight:20,marginLeft:10}}>  {subTitle} </Text>
        <Text style ={{color:'#000',fontSize:9, marginRight:20, marginLeft:10, color:"#000"}}>  {title} </Text>
      </View>
      <TouchableOpacity style={{
        backgroundColor:"#000",
        padding:10,
        width:100,
        borderRadius:10,
      }}>
        <Text style={{
         color:"#fff",
         textAlign:'center',
        }}>{jogo == 'ProxJogo' && data}
           {jogo == 'UltJogo' && data}</Text>
      </TouchableOpacity>
    </View>
    
  )
}