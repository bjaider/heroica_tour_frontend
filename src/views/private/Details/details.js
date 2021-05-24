import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Portal, Button, Modal, TextInput} from 'react-native-paper';
import {Rating, AirbnbRating} from 'react-native-ratings';
import syncStorage from 'sync-storage';
import {style} from './style';

const Restaurants = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(3);
  const [opinion, setOpinion] = useState('');
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    width: '90%',
    margin: '5%',
  };
  console.log('asd', route.params);
  useEffect(() => {
    setData(route.params);
  }, []);

  const Category = () => {
    console.log(data.category);
    switch (data.category) {
      case 'SitioTuristico':
        return {
          Usuario: syncStorage.get('clientID'),
          SitioTuristico: data.id,
          Rate: rating,
          Descripcion: opinion,
        };
      case 'Tour':
        return {
          Usuario: syncStorage.get('clientID'),
          Tour: data.id,
          Rate: rating,
          Descripcion: opinion,
        };
      case 'Auto':
        return {
          Usuario: syncStorage.get('clientID'),
          Auto: data.id,
          Rate: rating,
          Descripcion: opinion,
        };
      case 'Restaurante':
        return {
          Usuario: syncStorage.get('clientID'),
          Restaurante: data.id,
          Rate: rating,
          Descripcion: opinion,
        };
      case 'Souvenir':
        return {
          Usuario: syncStorage.get('clientID'),
          Souvenir: data.id,
          Rate: rating,
          Descripcion: opinion,
        };
      case 'Trabajadores':
        return {
          Usuario: syncStorage.get('clientID'),
          Trabajador: data.id,
          Rate: rating,
          Descripcion: opinion,
        };

      default:
        break;
    }
  };

  const review = () => {
    const url = `http://heroicatour.herokuapp.com/cl/encuesta/${data.endpoint}/`;
    const fields = Category();
    console.log(fields);
    console.log(url);
    axios
      .post(url, fields)
      .then(function (response) {
        console.log(response.data);
        hideModal();
        /* navigation.navigate('Home'); */
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        <TouchableOpacity
          style={style.rate}
          activeOpacity={0.7}
          onPress={showModal}>
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
          <Text style={style.infoText}>{data.Rate}</Text>
        </View>
      </View>
      <View style={style.descriptionContainer}>
        <Text style={style.description}>{data.Descripcion}</Text>
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <TextInput
            label="Opiniones"
            style={style.input}
            multiline={true}
            numberOfLines={5}
            theme={{colors: {primary: 'black'}}}
            onChangeText={opinion => setOpinion(opinion)}
          />

          <Rating
            ratingCount={5}
            startingValue={3}
            imageSize={60}
            onFinishRating={raiting => setRating(raiting)}
          />

          <Button
            mode="contained"
            style={style.button}
            theme={{colors: {primary: 'black'}}}
            onPress={review}>
            Enviar
          </Button>
        </Modal>
      </Portal>
    </ScrollView>
  );
};

export default Restaurants;
