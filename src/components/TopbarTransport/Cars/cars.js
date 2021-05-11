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

const Cars = () => {
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
  return (
    <ScrollView>
      {data.map(car => {
        return (
          <View style={style.container} key={car.Matricula}>
            <Image
              style={style.image}
              source={{
                uri: car.Image,
              }}
            />
            <Text style={style.title}>{`${car.Marca} ${car.Modelo}`}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Cars;