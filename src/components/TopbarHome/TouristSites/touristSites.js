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

const TouristSites = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'http://heroicatour.herokuapp.com/cl/sitios/';
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
    data.map(place => {
      if (id == place.id) {
        let props = {
          id: place.id,
          endpoint: 'sitio',
          category: 'SitioTuristico',
          Categoria: place.Categoria,
          Price: place.CostoEntrada,
          Descripcion: place.Descripcion,
          Direccion: place.Direccion,
          Image: place.Image,
          Nombre: place.Nombre,
          Rate: place.Rate,
        };
        navigation.navigate('Details', props);
      }
    });
  };
  return (
    <ScrollView>
      {data.map(place => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={place.id}
            onPress={() => paramns(place.id)}>
            <View style={style.container}>
              <Image
                style={style.image}
                source={{
                  uri: place.Image,
                }}
              />
              <Text style={style.title}>{place.Nombre}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      {/*      <View style={style.container}>
        <Image
          style={style.image}
          source={{
            uri: 'https://visitasimprescindibles.com/wp-content/uploads/2020/04/Portada-1.jpg',
          }}
        />
        <Text style={style.title}>Castillo San Felipe</Text>
      </View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/5c/22/42/rooftop-con-vista-a-la.jpg',
          }}
        />

        <Text style={style.title}>Torre del Reloj</Text>
      </View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={{
            uri: 'https://www.boats4u.co/images/noticias/razones-visitar-islas-del-rosario-colombia.jpg',
          }}
        />

        <Text style={style.title}>Islas del Rosario</Text>
      </View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={{
            uri: 'https://2.bp.blogspot.com/-aiJgb5QYndg/VuMPiVPix-I/AAAAAAAAA_M/_WYp9PFoCjwUgComoB1YhbFvEPggOb_ug/s1600/cartagena-colombia.jpg',
          }}
        />

        <Text style={style.title}>Ciudad Amurallada</Text>
      </View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={{
            uri: 'https://www.eluniversal.com.co/sites/default/files/teatro_heredia_0.jpg',
          }}
        />

        <Text style={style.title}>Teatro Adolfo Heredia</Text>
      </View> */}
    </ScrollView>
  );
};

export default TouristSites;
