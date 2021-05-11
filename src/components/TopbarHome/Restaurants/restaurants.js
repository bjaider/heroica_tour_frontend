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

const Restaurants = () => {
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
  return (
    <ScrollView>
      {data.map(restaurant => {
        return (
          <View style={style.container} key={restaurant.Nombre}>
            <Image
              style={style.image}
              source={{
                uri: restaurant.Image,
              }}
            />
            <Text style={style.title}>{restaurant.Nombre}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Restaurants;
