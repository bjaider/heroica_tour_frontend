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

const SignUp = ({navigation}) => {
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
        navigation.navigate('SignUp2');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {/*  <ScrollView > */}
        <View style={style.container}>
          <TextInput
            label="Email"
            style={style.input}
            theme={{colors: {primary: 'black'}}}
            onChangeText={email => setEmail(email)}
          />

          <TextInput
            label="Usuario"
            style={style.input}
            theme={{colors: {primary: 'black'}}}
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            label="Contraseña"
            style={style.input}
            theme={{colors: {primary: 'black'}}}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
          <Button
            mode="contained"
            style={style.button}
            theme={{colors: {primary: 'black'}}}
            onPress={handleClick}>
            Registrarse
          </Button>
        </View>
        {/* </ScrollView> */}
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;
