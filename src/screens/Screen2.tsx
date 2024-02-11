import React, { useState } from "react";
import { Text, View, TextInput, Image} from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";

export const Screen2 = () => {
  const [numero1, setNum1] = useState('');
  const [numero2, setNum2] = useState('');
  const [resultado, setResulTxt] = useState('');

  const onPressDivision = () => {
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);

    if (num2 === 0) {
      if (num1 === 0) {
        setResulTxt('INDETERMINACIÓN');
      } else {
        setResulTxt('NO EXISTE DIVISIÓN PARA CERO');
      }
      return;
    }

    const resultado = num1 / num2;

    if (!(resultado)) {
      setResulTxt('INDETERMINACIÓN');
    } else {
      setResulTxt(`El resultado de la división es: ${resultado}`);
    }
  }

  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:60,color:'blue'}}>DIVISIÓN</Text>
      <TextInput
        style={{borderWidth:1,borderColor:'blue',width:300, marginBottom:15,padding:5 }}
        onChangeText={setNum1}
        value={numero1}
        placeholder="Primer numero"/>
      <TextInput
        style={{borderWidth:1,borderColor:'black',width:300,marginBottom:15,padding:5}}
        onChangeText={setNum2}
        value={numero2}
        placeholder="Segundo numero"/>
      <ButtonComponent title="Dividir" onPress={onPressDivision} />
      <Text style={{ marginTop:5,fontSize:20}}>{resultado}</Text>
      <Image
              style={{width:200,height:200,alignItems: 'center'}}
              source={{uri:"https://us.123rf.com/450wm/rawpixel/rawpixel1810/rawpixel181020702/110597915-icono-de-signo-de-divisi%C3%B3n-aislado.jpg"
            }}/>
    </View>
  );
};