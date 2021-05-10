import React, {useState} from 'react';
import axios from 'axios';
import SyncStorage from 'sync-storage';
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

const Login = ({navigation}) => {
  const url = 'http://heroicatour.herokuapp.com/login/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    
    const fields = {
      username: username,
      password: password,
    };

    axios
      .post(url, fields)
      .then(function (response) {
        console.log(response.data);
        SyncStorage.set('token', response.data.token);
        navigation.navigate('Home')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={style.container}>
          <TextInput
            label="Usuario"
            style={style.input}
            /* value={am} */
            theme={{colors: {primary: 'black'}}}
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            label="Contraseña"
            style={style.input}
            /* value={am} */
            theme={{colors: {primary: 'black'}}}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
          <Button
            mode="contained"
            style={style.button}
            theme={{colors: {primary: 'black'}}}
            onPress={handleClick}>
            Login
          </Button>
          <Text
            onPress={() => console.log(navigation.navigate('SignUp'))}
            style={style.link}>
            ¿No tienes cuenta?
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;
