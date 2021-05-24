import React, {useEffect, useState} from 'react';
import axios from 'axios';Guides
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {style} from './style';

const Guides = ({navigation, route}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/ad/trabajadores/';
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
    data.map(guide => {
      if (id == guide.id) {
        let props = {
          id:guide.id,
          endpoint:'trabajador',
          category:'Trabajadores',
          Categoria: guide.Email,
          Price: guide.CostoPerDay,
          Direccion: `+57 ${guide.Celular}`,
          Image: 'http://guianzaexpress.com/wp-content/uploads/2020/08/MG_7270-scaled.jpg',
          Nombre: `${guide.Nombre} ${guide.Apellidos}`,
          Rate: guide.Rate,
        };
        navigation.navigate('Details', props);
      }
    });
  };
  return (
    <ScrollView>
      {data.map(guide => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={guide.id}
            onPress={() => paramns(guide.id)}>
            <View style={style.container}>
              <Image
                style={style.image}
                source={{
                  uri: 'http://guianzaexpress.com/wp-content/uploads/2020/08/MG_7270-scaled.jpg',
                }}
              />
              <Text style={style.title}>{guide.Nombre} {guide.Apellidos}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Guides;
