import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {style} from './style';

const Cars = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/cl/autos/';
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

  const paramns = id => {
    data.map(car => {
      if (id == car.id) {
        let props = {
          Categoria: 'Autos',
          Price: car.CostoPerDay,
          Descripcion: car.Descripcion,
          Direccion: `Matrícula: ${car.Matricula}`,
          Image: car.Image,
          Nombre: `${car.Marca} ${car.Modelo}`,
          Rate: car.Rate,
        };
        navigation.navigate('Details', props);
      }
    });
  };
  return (
    <ScrollView>
      {data.map(car => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={car.id}
            onPress={() => paramns(car.id)}>
            <View style={style.container} key={car.Matricula}>
              <Image
                style={style.image}
                source={{
                  uri: car.Image,
                }}
              />
              <Text style={style.title}>{`${car.Marca} ${car.Modelo}`}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Cars;
