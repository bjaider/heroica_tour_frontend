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
  Button
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './src/components/Navigation/navigation';
import Login from './src/views/public/Login/login';
import SignUp from './src/views/public/SignUp/signUp';

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
        case 'Login':
          return 'Iniciar Sesión';
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
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Cerrar Sesión"
                    color="#00cc00"
                  />
                ),
              })}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="SignUp"
              options={{
                title: 'Registro',
              }}
              component={SignUp}
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
