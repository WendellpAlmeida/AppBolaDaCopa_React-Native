import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import FuteImg from './assets/fute.svg'

import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfileScreen from './screens/ProfileScreen';
import MessagesScreen from './screens/MessagesScreen';
import MomentsScreen from './screens/MomentsScreen';
import SettingsSreen from './screens/SettingsScreen';
import CustomDrawer from './components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './navigation/TabNavigation';

const Drawer = createDrawerNavigator();

function App() {
  return  (
  <NavigationContainer >
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props}/>} 
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor:"#00bfff",
      drawerInactiveTintColor:"#333",
      drawerActiveTintColor:"#fff",
      drawerLabelStyle: {
        marginLeft: -25,
        fontSize:15,
        
        } }}>
        <Drawer.Screen  name="Início" component={Main} options={{drawerIcon:({color}) =>(
          <AntDesign name="rocket1" size ={20} color={color}/>
        ) }} />
       
        <Drawer.Screen  name="Home" component={TabNavigator} options={{drawerIcon:({color}) =>(
          <Ionicons name="home-outline" size ={20} color={color}/>
        ) }}  />
        <Drawer.Screen  name="Perfil" component={ProfileScreen} options={{drawerIcon:({color}) =>(
          <Ionicons name="person-outline" size ={20} color={color}/>
        ) }}  />
        <Drawer.Screen  name="Mensagem" component={MessagesScreen} options={{drawerIcon:({color}) =>(
          <Ionicons name="chatbox-ellipses-outline" size ={20} color={color}/>
        ) }}  />
        <Drawer.Screen  name="Destaques" component={MomentsScreen} options={{drawerIcon:({color}) =>(
          <Ionicons name="timer-outline" size ={20} color={color}/>
        ) }}  />
        <Drawer.Screen  name="Configurações" component={SettingsSreen} options={{drawerIcon:({color}) =>(
          <Ionicons name="settings-outline" size ={20} color={color}/>
        ) }}  />
    </Drawer.Navigator>
  </NavigationContainer>
  );
} 

const Main= ({navigation}) =>{
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
      }}>
    <View style={{marginTop:20}}>
      <Text style = {{
        fontSize:30,
        fontWeight:'bold',
        color:'#20315f',

        }}>BOLA DA COPA</Text>
    </View>
    <View style= {{flex:1,justifyContent:'center',alignItems:'center'}}>
    <FuteImg width={300} height={300} style ={{transform: [{rotate: '-15deg'}]}} />
    </View>
    <TouchableOpacity 
      onPress={() => navigation.navigate("Home")}
      style={{
      backgroundColor:'#87cefa',
      padding:20,
      width:"90%",
      borderRadius:5,
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:50,
  }}>
      <Text style={{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        fontFamily:'Roboto-MediumItalic',
        
      }}>Vamos Começar</Text>
      <MaterialCommunityIcons name="arrow-forward-ios" size={22} color ="000"/>
    </TouchableOpacity>
    </SafeAreaView>
  );
}


export default App;
