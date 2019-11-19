import React from 'react';
import {Text} from 'react-native';
import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';

import authStyles from '../styles';

const Home = ({navigation}) => {
  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
      }}>
      <Text style={authStyles.title}>HOME</Text>
      <Text style={authStyles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Button text={'Next'} onPress={() => navigation.navigate('Register')} />
    </Container>
  );
};

export default Home;
