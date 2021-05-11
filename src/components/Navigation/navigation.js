import React from 'react';
import SyncStorage from 'sync-storage';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../views/private/Home/home';
import Map from '../../views/private/Map/map';
import Currency from '../../views/private/Currency/currency';
import Transport from '../../views/private/Transport/transport';
import Login from '../../views/public/Login/login';
import SignUp from '../../views/public/SignUp/signUp';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'black',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: isFocused ? 'white' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{tabBarLabel: 'Inicio'}}
        component={Home}
      />
      <Tab.Screen name="Map" options={{tabBarLabel: 'Mapa'}} component={Map} />
      <Tab.Screen
        name="Currency"
        options={{tabBarLabel: 'Divisas'}}
        component={Currency}
      />
      <Tab.Screen
        name="Transport"
        options={{tabBarLabel: 'Transporte'}}
        component={Transport}
      />
      {!SyncStorage.get('token') ? (
        <Tab.Screen
          name="Login"
          options={{tabBarLabel: 'Login'}}
          component={Login}
        />
      ) : null}
      {/*     <Tab.Screen
        name="SignUp"
        options={{tabBarLabel: 'SignUp'}}
        component={SignUp} 
      /> */}
    </Tab.Navigator>
  );
}
