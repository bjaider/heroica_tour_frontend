import {StyleSheet, Dimensions} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    width: '100%',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    backgroundColor: 'black',
    width: '100%',
    flex: 1,
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
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
});
