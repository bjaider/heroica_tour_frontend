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

  subtitle: {
    color: 'white',

    fontSize: 14,
    position: 'absolute',
    left: 15,
    bottom: 10,
  },

  rate: {
    position: 'absolute',
    right: 15,
    top: 10,
    backgroundColor: '#ececec',
    padding: 5,
    borderRadius: 50,
  },
  rateImage: {
    width: 24,
    height: 24,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  infoContainers: {
    backgroundColor: '#151515',
    flex: 2,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomColor: 'black',
  },
  secondInfoContainers: {
    flex: 1,
  },
  lastInfoContainers: {
    flex: 1,
    borderRightWidth: 0,
  },
  infoText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
  },
  descriptionContainer: {
    padding: 10,
  },
  description: {
    textAlign: 'justify',
  },
  input: {
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    marginTop: 20,
    marginHorizontal: '25%',
  },
});
