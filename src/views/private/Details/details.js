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
  console.log('asd', route.params);
  useEffect(() => {
    setData(route.params);
  }, []);
  return (
    <ScrollView>
      <View style={style.container} key={data.id}>
        <Image
          style={style.image}
          source={{
            uri: data.Image,
          }}
        />
        <Text style={style.title}>{data.Nombre}</Text>
        <Text style={style.subtitle}>{data.Categoria}</Text>
        <TouchableOpacity style={style.rate} activeOpacity={0.7}>
          <Image
            style={style.rateImage}
            source={{
              uri: 'https://res.cloudinary.com/dhxg3zyjz/image/upload/v1620787212/Heroica%20Tour/star_2_dzjacx.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={style.info}>
        <View style={style.infoContainers}>
          <Text style={style.infoText}>{data.Direccion}</Text>
        </View>
        <View style={[style.infoContainers, style.secondInfoContainers]}>
          <Text style={style.infoText}>
            {data.Price ? `${data.Price} COP` : `Tel: ${data.Telefono}`}
          </Text>
        </View>
        <View style={[style.infoContainers, style.lastInfoContainers]}>
          <Text style={style.infoText}>{data.Rate} ☆</Text>
        </View>
      </View>
      <View style={style.descriptionContainer}>
        <Text style={style.description}>{data.Descripcion}</Text>
      </View>
    </ScrollView>
  );
};

export default Restaurants;
