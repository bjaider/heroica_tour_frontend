import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {TextInput, DefaultTheme, Button} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {style} from './style';

const SignUp2 = ({navigation, route}) => {
  const url = 'http://heroicatour.herokuapp.com/cl/clientes/';
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const handleClick = () => {
    const fields = {
      Usuario: route.params.user.id,
      Nombre: name,
      Apellidos: lastName,
      Nacionalidad: citizenship,
      Celular: phoneNumber,
    };

    axios
      .post(url, fields)
      .then(function (response) {
        console.log(response.data);
        navigation.navigate('Preferences', route.params.user.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {/* <ScrollView> */}
        <View style={style.container}>
          <TextInput
            label="Nombre"
            style={style.input}
            /* value={am} */
            theme={{colors: {primary: 'black'}}}
            onChangeText={name => setName(name)}
          />
          <TextInput
            label="Apellidos"
            style={style.input}
            /* value={am} */
            theme={{colors: {primary: 'black'}}}
            onChangeText={lastName => setLastName(lastName)}
          />
          <TextInput
            label="Nacionalidad"
            style={style.input}
            /* value={am} */
            theme={{colors: {primary: 'black'}}}
            onChangeText={citizenship => setCitizenship(citizenship)}
          />
          <TextInput
            label="Celular"
            style={style.input}
            /* value={am} */
            theme={{colors: {primary: 'black'}}}
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />

          <Button
            mode="contained"
            style={style.button}
            theme={{colors: {primary: 'black'}}}
            onPress={handleClick}>
            Registrarse
          </Button>
        </View>
        {/*  </ScrollView> */}
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp2;
