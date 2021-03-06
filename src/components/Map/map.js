import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = () => {
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
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 10.4,
          longitude: -75.5,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/*  <Marker
          coordinate={{latitude: 10.4227139, longitude: -75.5393513342617}}
          title={'Castillo San Felipe de Barajas'}
        /> */}

        {data.map(place => {
          return (
            <Marker
              key={place.Nombre}
              coordinate={{latitude: place.Latitud, longitude: place.Longitud}}
              title={place.Nombre}
            />
          );
        })}
      </MapView>
    </View>
  );
};
export default Map;
