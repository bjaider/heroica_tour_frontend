import React from 'react';
import {Avatar} from 'react-native-paper';
import {style} from './style';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Map from '../../../components/Map/map';
import Guide from '../../../components/Guide/guide';
import TouristSites from '../../../components/TopbarHome/TouristSites/touristSites';
import Restaurants from '../../../components/TopbarHome/Restaurants/restaurants';
import Tours from '../../../components/TopbarHome/Tours/tours';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Cars from '../../../components/TopbarTransport/Cars/cars';
import Taxis from '../../../components/TopbarTransport/Taxis/taxis';

const Categoría1 = ({navigation}) => {
  return (
    <>
      <Text>Categoría 1</Text>
    </>
  );
};

const Categoría2 = ({navigation}) => {
  return (
    <>
      <Text>Categoría 2</Text>
    </>
  );
};

const Categoría3 = ({navigation}) => {
  return (
    <>
      <Text>Categoría tres</Text>
    </>
  );
};

const Transport = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: 'black'},
          labelStyle: {fontSize: 10},
        }}>
        <Tab.Screen name="Autos" component={Cars} />
        <Tab.Screen name="Taxis" component={Taxis} />
        <Tab.Screen name="Rutas" component={Categoría3} />
      </Tab.Navigator>
    </>
  );
};

export default Transport;
