import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { Screen2 } from './Screen2';


const Stack = createStackNavigator();

export const Screen1 =({ navigation }:any)=> {

    const onPress = () => {
        
      navigation.navigate('Screen2');
    };
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 30, marginBottom: 10, color:'black'}} >BIENVENIDOS</Text>
          <Image
              style={{width:400,height:652,alignItems: 'center'}}
              source={{uri:"https://img.freepik.com/vector-gratis/fondo-degradado-ui-ux_23-2149065783.jpg"
            }}/>
            <View>
            <ButtonComponent title="ACCEDER" onPress={() => navigation.navigate(Screen2)} />
          </View>
        </View>
      );
    }