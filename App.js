import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import SyncStorage from 'sync-storage';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar,
} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './src/components/Navigation/navigation';
import Login from './src/views/public/Login/login';
import SignUp from './src/views/public/SignUp/signUp';
import SignUp2 from './src/views/public/SignUp2/signUp2';
import Preferences from './src/views/public/Preferences/preferences';
import Details from './src/views/private/Details/details';
import axios from 'axios';
import syncStorage from 'sync-storage';

const Stack = createStackNavigator();
const App = () => {
  /*   const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };
  console.log(theme); */
  const getHeaderTitle = route => {
    try {
      const routeName = getFocusedRouteNameFromRoute(route) ?? 'Inicio';
      switch (routeName) {
        case 'Home':
          return 'Inicio';
        case 'Map':
          return 'Mapa & Guías';
        case 'Currency':
          return 'Cambio de Divisas';
        case 'Transport':
          return 'Transporte';
        case 'Login':
          return 'Iniciar Sesión';
        default:
          break;
      }
    } catch (e) {}
  };
  const [sw, setSw] = useState(false);
  useEffect(() => {
    console.log(sw);
  }, [sw]);
  const handleClick = () => {
    SyncStorage.remove('token');

    sw ? setSw(false) : setSw(true);
  };
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="Inicio"
              component={Tabs}
              options={({route}) => ({
                headerTitle: getHeaderTitle(route),
                headerRight: () =>
                  syncStorage.get('token') ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingRight: 10,
                        width: 120,
                        height: '100%',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'black',
                          height: '60%',
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          borderRadius: 3,
                        }}
                        onPress={handleClick}>
                        <Text style={{marginHorizontal: 10, color: 'white'}}>
                          Cerrar Sesión
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null,
              })}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Details"
              options={{
                title: 'Detalles',
              }}
              component={Details}
            />
            <Stack.Screen
              name="SignUp"
              options={{
                title: 'Registro',
              }}
              component={SignUp}
            />
            <Stack.Screen
              name="SignUp2"
              options={{
                title: 'Registro',
              }}
              component={SignUp2}
            />
            <Stack.Screen
              name="Preferences"
              options={{
                title: 'Preferencias',
              }}
              component={Preferences}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  /*   sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }, */
});

export default App;
