import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '../screens/NewsScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab =createBottomTabNavigator();

const TabNavigator = () => {
    return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{backgroundColor:"#00bfff"},
        tabBarInactiveTintColor:'#fff',
        tabBarActiveTintColor: '#120a8f'
    }}>
        <Tab.Screen name="Home2" component={HomeScreen} options={{
            tabBarIcon: ({color,size}) =>(
                <Ionicons name ="home-outline" color={color} size={size} />
            )
        }} />
        <Tab.Screen name="Notícias" component={NewsScreen}options={{
            tabBarBadge:1,
            tabBarIcon: ({color,size}) =>(
                <Feather name ="monitor" color={color} size={size} />
            )
        }}/>
        <Tab.Screen name="Favoritos" component={FavoriteScreen}options={{
            tabBarIcon: ({color,size}) =>(
                <Ionicons name ="heart-outline" color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
    );
}

export default TabNavigator;
