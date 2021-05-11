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
  const url = 'http://heroicatour.herokuapp.com/cl/preferencias/';
  const [budget, setBudget] = useState(0);
  const [companions, setCompanions] = useState(0);
  const [duration, setDuration] = useState(0);
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(true);
  const [option3, setOption3] = useState(true);
  const [option4, setOption4] = useState(true);
  const [option5, setOption5] = useState(true);
  const handleClick = () => {
    /* console.log(route.params) */
    const fields = {
      Usuario: route.params,
      Presupuesto: budget,
      Acompañantes: companions,
      Duracion: duration,
      Alojamiento: option1,
      Auto: option2,
      Playa: option3,
      Historia: option4,
      Recordatorio: option5,
    };
    console.log(fields);
    axios
      .post(url, fields)
      .then(function (response) {
        console.log(response.data);
        navigation.navigate('Home');
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
              selectedValue={option2}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption2(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>
            <Text style={style.title}>Playas</Text>
            <Picker
              selectedValue={option3}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption3(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>
            <Text style={style.title}>Historia</Text>
            <Picker
              selectedValue={option4}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setOption4(itemValue)}>
              <Picker.Item label="Sí" value="true" />
              <Picker.Item label="No" value="false" />
            </Picker>

            <Text style={style.title}>Recordatorio</Text>
            <Picker
              selectedValue={option5}
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
