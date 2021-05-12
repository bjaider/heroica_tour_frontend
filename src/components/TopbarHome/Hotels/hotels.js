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

const Hotels = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/cl/hoteles/';
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
    data.map(hotel => {
      if (id == hotel.id) {
        let props = {
          Categoria: hotel.Categoria,
          Telefono: hotel.Telefono,
          Descripcion: hotel.Descripcion,
          Direccion: hotel.Direccion,
          Image: hotel.Image,
          Nombre: hotel.Nombre,
          Rate: hotel.Rate,
        };
        navigation.navigate('Details', hotel);
      }
    });
  };
  return (
    <ScrollView>
      {data.map(hotel => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={hotel.id}
            onPress={() => paramns(hotel.id)}>
            <View style={style.container}>
              <Image
                style={style.image}
                source={{
                  uri: hotel.Image,
                }}
              />
              <Text style={style.title}>{hotel.Nombre}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Hotels;