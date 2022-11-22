import { View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomDrawer = (props) => {
  return (
    <View  style={{flex: 1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#00bfff"}}>
        <ImageBackground source={require('../assets/images/blue-background.jpg')} style={{padding:20}} />
        <Image source={require('../assets/images/icon.png')} style={{height:70 , width:70, borderRadius:40, marginBottom:10, marginLeft:10, marginTop:10}}/>
        <Text style ={{color:'#fff', marginLeft:10, marginBottom:10, fontSize:18, }}> Wendell Almeida</Text>
            <View style={{flex:1,backgroundColor:"#fff", paddingTop:10}}>
            <DrawerItemList  {...props}/>
            </View>
    </DrawerContentScrollView>
    <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={()=>{}} style= {{paddingVertical:15}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
        <Ionicons name="share-social-outline" size={22}  />
        <Text style={{fontSize:15,color:"#000", marginLeft:5}}>Compartilhe</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style= {{paddingVertical:15}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
        <Ionicons name="exit-outline" size={22}  />
        <Text style={{fontSize:15,color:"#000", marginLeft:5}}>Sair</Text>
        </View>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default CustomDrawer