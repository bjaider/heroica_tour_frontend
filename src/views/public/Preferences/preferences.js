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
  Picker,
} from 'react-native';
import {TextInput, DefaultTheme, Button} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {style} from './style';

const Preferences = ({navigation, route}) => {
  const url = 'http://heroicatour.herokuapp.com/cl/clientes/';
  const [budget, setBudget] = useState(0);
  const [companions, setCompanions] = useState(0);
  const [duration, setDuration] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);
  const [option3, setOption3] = useState(null);
  const [option4, setOption4] = useState(null);
  const [option5, setOption5] = useState(null);
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <View style={style.container}>
            <TextInput
              label="Presupuesto (COP)"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              onChangeText={budget => setBudget(budget)}
            />

            <TextInput
              label="Número de acompañantes"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              onChangeText={companions => setCompanions(companions)}
            />

            <TextInput
              label="Días de estadía"
              style={style.input}
              /* value={am} */
              theme={{colors: {primary: 'black'}}}
              onChangeText={duration => setDuration(duration)}
            />
            <Text style={style.title}>Alojamiento</Text>
            <Picker
              selectedValue={option1}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption1(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>
            <Text style={style.title}>Auto</Text>
            <Picker
              selectedValue={option1}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption2(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>
            <Text style={style.title}>Playas</Text>
            <Picker
              selectedValue={option1}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption3(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>
            <Text style={style.title}>Historia</Text>
            <Picker
              selectedValue={option1}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption4(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>

            <Text style={style.title}>Recordatorio</Text>
            <Picker
              selectedValue={option1}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption5(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>

            <Button
              mode="contained"
              style={style.button}
              theme={{colors: {primary: 'black'}}}
              onPress={handleClick}>
              Enviar
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Preferences;
