import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').height;
export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 30,
    width: '70%',
  },
  button: {
    width: '50%',
  },
  link: {
    marginTop: 5,
    color:"#046582"
  },
});
