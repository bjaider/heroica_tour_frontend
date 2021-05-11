import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
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
    color: '#046582',
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  picker: {
    color: 'black',
    height: 50,
    width: screenWidth * 0.5,
  },
});
