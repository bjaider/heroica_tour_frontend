import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import {style} from './style';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Map from '../../../components/Map/map';
import Guide from '../../../components/Guide/guide';
import TouristSites from '../../../components/TopbarHome/TouristSites/touristSites';
import Restaurants from '../../../components/TopbarHome/Restaurants/restaurants';
import Tours from '../../../components/TopbarHome/Tours/tours';
import Hotels from '../../../components/TopbarHome/Hotels/hotels';
import Souvenirs from '../../../components/TopbarHome/Souvenirs/souvenirs';

const Home = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: 'black'},
          labelStyle: {fontSize: 10},
        }}>
        <Tab.Screen name="Sitios Turísticos" component={TouristSites} />
        <Tab.Screen name="Restaurantes" component={Restaurants} />
        <Tab.Screen name="Hoteles" component={Hotels} />
        <Tab.Screen name="Tours" component={Tours} />
        <Tab.Screen name="Souvenirs" component={Souvenirs} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
