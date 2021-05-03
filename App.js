import 'react-native-gesture-handler';

import React from 'react';
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
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './src/components/Navigation/navigation';

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
        case 'PublicTransport':
          return 'Transporte Público';
        default:
          break;
      }
    } catch (e) {}
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
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/*  <NavigationContainer>
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
              })}
            />
          </Stack.Navigator>
        </NavigationContainer> */}
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
