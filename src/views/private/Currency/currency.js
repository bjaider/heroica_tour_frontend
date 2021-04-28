import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Picker,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {style} from './style';
import axios from 'axios';
import {Button, TextInput, DefaultTheme} from 'react-native-paper';
const Currency = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };
  
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    getCurrencies();

    console.log(currencies);
  }, []);

  const getCurrencies = () => {
    var options = {
      method: 'GET',
      url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/symbols',
      headers: {
        'x-rapidapi-key': '2c823f9a9bmsh4b67645136c88afp165756jsn1e6aba9ec7a0',
        'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let array = response.data.symbols;
        let currenciesArray = [];
        for (let currency of Object.keys(array)) {
          var country = array[currency];
          currenciesArray.push({country: country, currency: currency});
        }
        setCurrencies(currenciesArray);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getConvert = () => {
    var options = {
      method: 'GET',
      url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
      params: {amount: amount, to: currencyB, from: currencyA},
      headers: {
        'x-rapidapi-key': '2c823f9a9bmsh4b67645136c88afp165756jsn1e6aba9ec7a0',
        'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setResult(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const [currencyA, setCurrencyA] = useState('COP');
  const [currencyB, setCurrencyB] = useState('USD');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={style.containerTop}>
          <View style={style.pickerContainer}>
            <Text style={style.title}>Moneda de entrada</Text>
            <Picker
              selectedValue={currencyA}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setCurrencyA(itemValue)}>
              {currencies.map(currency => {
                return (
                  <Picker.Item
                    label={currency.country}
                    value={currency.currency}
                    key={currency.currency}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={style.pickerContainer}>
            <Text style={style.title}>Moneda de salida</Text>
            <Picker
              selectedValue={currencyB}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) => setCurrencyB(itemValue)}>
              {currencies.map(currency => {
                return (
                  <Picker.Item
                    label={currency.country}
                    value={currency.currency}
                    key={currency.currency}
                  />
                );
              })}
            </Picker>
          </View>
          <TextInput
            label="Cantidad"
            style={style.input}
            /* value={am} */
            onChangeText={amount => setAmount(amount)}
          />
          <Button
            style={{backgroundColor: 'black'}}
            mode="contained"
            onPress={() => getConvert()}>
            Convertir
          </Button>
        </View>
        <View style={style.containerBottom}>
          <Text style={style.result}>{result}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Currency;
