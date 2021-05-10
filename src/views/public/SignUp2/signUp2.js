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

const SignUp2 = ({navigation}) => {
  const url = 'http://heroicatour.herokuapp.com/register/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = () => {
    const fields = {
      email: email,
      username: username,
      password: password,
    };

    axios
      .post(url, fields)
      .then(function (response) {
        console.log(response.data);
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
              /* onChangeText={amount => setAmount(amount)} */
            />
            <TextInput
              label="Apellidos"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              /* onChangeText={amount => setAmount(amount)} */
            />
            <TextInput
              label="Nacionalidad"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              /* onChangeText={amount => setAmount(amount)} */
            />
            <TextInput
              label="Celular"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              /* onChangeText={amount => setAmount(amount)} */
            />

            <Button
              mode="contained"
              style={style.button}
              theme={{colors: {primary: 'black'}}}
              onPress={() => console.log('Pressed')}>
              Registrarse
            </Button>
          </View>
       {/*  </ScrollView> */}
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp2;
