import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Picker,
  TextInput,
  Keyboard,
} from 'react-native';
import {style} from './style';

const Taxis = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/cl/taxi/';
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);

        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [neighborhoods, setNeighborhoods] = useState([
    'Centro',
    'Crespo',
    'Marbella',
    'Cabrero',
    'Bocagrande',
    'CastilloGrande',
    'ElLaguito',
    'LaBoquilla',
    'Manzanillo',
    'SanFelipe',
    'LaPopa',
    'Manga',
    'PlayaBlanca',
    'Baru',
    'Aeropuerto',
    'Terminal',
  ]);

  const [result, setResult] = useState(0);
  const [pointA, setPointA] = useState('Centro');
  const [pointB, setPointB] = useState('Centro');

  const payment = () => {
    console.log('origen', pointA);
    console.log('destino', pointB);

    data.map(taxi => {
      if (pointA == taxi.Barrio) {
        for (let neighborhoods of Object.keys(taxi)) {
          if (neighborhoods == pointB) {
            console.log(taxi[neighborhoods]);
            setResult(taxi[neighborhoods]);
          }
        }
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.containerTop}>
          <View style={style.pickerContainer}>
            <Text style={style.title}>Origen</Text>
            <Picker
              selectedValue={pointA}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setPointA(itemValue)}>
              {neighborhoods.map(neighborhood => {
                return (
                  <Picker.Item
                    label={neighborhood}
                    value={neighborhood}
                    key={neighborhood}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={style.pickerContainer}>
            <Text style={style.title}>Destino</Text>
            <Picker
              selectedValue={pointB}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setPointB(itemValue)}>
              {neighborhoods.map(neighborhood => {
                return (
                  <Picker.Item
                    label={neighborhood}
                    value={neighborhood}
                    key={neighborhood}
                  />
                );
              })}
            </Picker>
          </View>

          <TouchableOpacity style={style.button} onPress={payment}>
            <Text style={style.buttonText}>Convertir</Text>
          </TouchableOpacity>
        </View>
        <View style={style.containerBottom}>
          <Text style={style.result}>{result}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Taxis;
