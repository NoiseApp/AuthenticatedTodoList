import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
  },
  button: {
    width: '$screenWidth * 0.8',
    height: 50,
    backgroundColor: 'white', //para que se vea el shadow
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
    fontSize: 16,
  }
});

export default styles;