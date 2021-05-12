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

const Tours = ({navigation,route}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/cl/tours/';
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
    data.map(tour => {
      if (id == tour.id) {
        let props = {
          Categoria: tour.Categoria,
          Price: tour.Costo,
          Descripcion: tour.Descripcion,
          Direccion: tour.Direccion,
          Image: tour.Image,
          Nombre: tour.Nombre,
          Rate: tour.Rate,
        };
        navigation.navigate('Details', props);
      }
    });
  };
  return (
    <ScrollView>
      {data.map(tour => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={tour.id}
            onPress={() => paramns(tour.id)}>
            <View style={style.container}>
              <Image
                style={style.image}
                source={{
                  uri: tour.Image,
                }}
              />
              <Text style={style.title}>{tour.Nombre}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Tours;
