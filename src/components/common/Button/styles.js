import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    margin: 15
  },
  button: {
    flexDirection: 'row',
    width: '$screenWidth * 0.8',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  text: {
    color: '$primaryDark',
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: '$regular'
  }
});

export default styles;