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

const Restaurants = ({navigation, route}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/cl/restaurantes/';
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
    data.map(restaurant => {
      if (id == restaurant.id) {
        let props = {
          id:restaurant.id,
          endpoint:'restaurante',
          category:'Restaurante',
          Categoria: restaurant.Categoria,
          Price: restaurant.CostoMax,
          Descripcion: restaurant.Descripcion,
          Direccion: restaurant.Direccion,
          Image: restaurant.Image,
          Nombre: restaurant.Nombre,
          Rate: restaurant.Rate,
        };
        navigation.navigate('Details', props);
      }
    });
  };
  return (
    <ScrollView>
      {data.map(restaurant => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={restaurant.id}
            onPress={() => paramns(restaurant.id)}>
            <View style={style.container}>
              <Image
                style={style.image}
                source={{
                  uri: restaurant.Image,
                }}
              />
              <Text style={style.title}>{restaurant.Nombre}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Restaurants;
