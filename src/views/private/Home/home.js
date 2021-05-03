import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import {style} from './style';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Map from '../../../components/Map/map';
import Guide from '../../../components/Guide/guide';
import AllAttractions from '../../../components/TopbarHome/AllAttractions/allAttractions';

const Categoría1 = ({navigation}) => {
  return (
    <>
      <Text>Categoría uno</Text>
    </>
  );
};

const Categoría2 = ({navigation}) => {
  return (
    <>
      <Text>Categoría dos</Text>
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

const Home = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: 'black'},
          labelStyle:{fontSize:10}
        }}>
        <Tab.Screen name="Todas" component={AllAttractions} />
        <Tab.Screen name="Categoría 1" component={Categoría1} />
        <Tab.Screen name="Categoría 2" component={Categoría2} />
        <Tab.Screen name="Categoría 3" component={Categoría3} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
