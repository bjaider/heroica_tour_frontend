import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex:1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default () => (
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
      <Marker
        coordinate={{latitude: 10.4227139, longitude: -75.5393513342617}}
        title={'Castillo San Felipe de Barajas'}
        /* description={'Fortificación localizada en la ciudad de Cartagena de Indias en Colombia'} */
      />
    </MapView>
  </View>
);
