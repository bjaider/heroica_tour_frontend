import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').height;
export const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: screenWidth / 4,
    /*     justifyContent: 'center',
    alignItems: 'center', */
  },
  image: {
    flex: 1,
    opacity: 0.5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
    left: 15,
    bottom: 30,
  },
});