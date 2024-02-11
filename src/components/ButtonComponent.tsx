import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponent = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
    onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:'gray',
        paddingVertical:10,
        paddingHorizontal:100
    },
    buttonText:{
        textAlign:'center',
        color:'black',
        fontSize:15,
        fontWeight:'bold'
    }
})