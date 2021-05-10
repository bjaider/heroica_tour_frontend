import React from 'react';
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
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
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
            <TextInput
              label="Email"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              /* onChangeText={amount => setAmount(amount)} */
            />

            <TextInput
              label="Usuario"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              /* onChangeText={amount => setAmount(amount)} */
            />
            <TextInput
              label="Contraseña"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              secureTextEntry={true}
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;
