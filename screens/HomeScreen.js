import { View, Text, ScrollView,SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import  {Carousel} from 'react-native-snap-carousel';
import { sliderData,ultimosJogos, proximosJogos } from '../model/data';
import BannerSlide from '../components/BannerSlide';
import {windowWidth} from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';
import Listitem from '../components/Listitem';



export default function HomeScreen({navigation}) {
    const [gamesTab, setGamesTab] = useState(1);

    const renderBanner =({item, index}) =>{
        return  <BannerSlide data={item} />
    };

    const onSelectSwitch = (value) => {
        setGamesTab(value);
    }
  return (
  <SafeAreaView style={{
    flex:1,
    backgroundColor:'#fff'
  }}>
    <ScrollView style={{padding:20}}>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:20,
            }}>
        <Text style={{fontSize:18,fontFamily:'Robot-Medium',color:'#000'}}>Olá,Wendell Almeida</Text>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <ImageBackground source={require('../assets/images/icon.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}}  />
        </TouchableOpacity>
        </View>

        <View style={{
            flexDirection:"row",
            borderColor:"#c6c6c6",
            borderWidth:1,
            borderRadius:8,
            paddingHorizontal:7,
            paddingVertical:-1,
            }}>
            <Feather name="search" size={25} color={'#c6c6c6'} style={{marginRight:1, marginTop:10}} />
            <TextInput placeholder='Pesquisar'/>  
            </View> 
        <View style={{
            marginVertical:15,
            flexDirection:"row",
            justifyContent:'space-between'
        }}>
            <Text style={{fontSize:18,fontFamily:'Robot-Medium',color:'#000'}}>Jogadores em Destaque</Text>
            <TouchableOpacity onPress={()=>{}}>
                <Text style ={{color: '#0aada8'}} >Ver todos</Text>
            </TouchableOpacity>
        </View>   
         
         <Carousel
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth -40}
            itemWidth={300}
            loop={true}
         />

        <View style={{marginVertical:20}}>
            <CustomSwitch 
            selectionMode={1}
            option1 ="Próximos Jogos"
            option2="Últimos jogos"
            onSelectSwitch={onSelectSwitch}/>
        </View>

        {gamesTab == 1 && 
        proximosJogos.map(item => (
            <Listitem 
            key= {item.id}
            photo={item.poster}
            title={item.title} 
            subTitle={item.subtitle}
            jogo={item.jogo}
            data={item.data}

               />
        ))
        }
        {gamesTab == 2 &&   ultimosJogos.map(item => (
            <Listitem 
            key= {item.id}
            photo={item.poster}
            title={item.title} 
            subTitle={item.subtitle}
            jogo={item.jogo}
            data={item.data}

               />
        ))
        }
       
    </ScrollView>
  </SafeAreaView>
  )
}