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

const Tours = () => {
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
  return (
    <ScrollView>
      {data.map(tour => {
        return (
          <View style={style.container} key={tour.Nombre}>
            <Image
              style={style.image}
              source={{
                uri: tour.Image,
              }}
            />
            <Text style={style.title}>{tour.Nombre}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Tours;
