import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import map from '../../../components/Map/map';
import Guide from '../../../components/Guide/guide';


const Map = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen name="Mapa" component={map} />
        <Tab.Screen name="Guías" component={Guide} />
      </Tab.Navigator>
    </>
  );
};

export default Map;
