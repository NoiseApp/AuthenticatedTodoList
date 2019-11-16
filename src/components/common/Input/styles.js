import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  primaryDark: { color: '$primaryDark' },
  primaryLight: { color: '$primaryLight' },
  container: {
    alignItems: 'center',
    marginBottom: 15
  },
  inputContainer: {
  },
  input: {
  },
  error: {
    color: 'red',
    marginBottom: 6,
    width: '$screenWidth * 0.8',
    fontSize: 14
  }
});

export default styles;
