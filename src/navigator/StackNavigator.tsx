import 'react-native-gesture-handler'; 
import React from 'react' 
import { createStackNavigator } from '@react-navigation/stack'; 
import { Screen1 } from '../screens/Inicio';
import { Screen2 } from '../screens/Screen2';

export type RootStackParamList = {
    Screen1: undefined;
    Screen2: undefined;
}

const Stack = createStackNavigator <RootStackParamList> (); 

export const StackNavigator=()=> { 
  return ( 
    <Stack.Navigator screenOptions={{ 
        cardStyle:{ 
        }}}> 
      <Stack.Screen name="Screen1" options={{title:'INICIO'}}component={Screen1} /> 
      <Stack.Screen name="Screen2" options={{headerShown:false}}component={Screen2} />
    </Stack.Navigator> 
  ); 
}