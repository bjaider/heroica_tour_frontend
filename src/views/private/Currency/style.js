import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const style = StyleSheet.create({
  containerTop: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    backgroundColor: 'black',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  pickerContainer: {
    marginVertical: 20,
  },
  picker: {
    color: 'black',
    height: 50,
    width: screenWidth * 0.7,
  },
  input: {
    /* paddingVertical: 5, */
    marginBottom: 30,
    width: '70%',
  },
  result: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
});
