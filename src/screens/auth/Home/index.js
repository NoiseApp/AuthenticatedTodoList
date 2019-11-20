import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';

import authStyles from '../styles';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user._user.uid ? navigation.navigate('Todos List') : setLoading(false);
    });
  }, []);

  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
      }}>
      {loading ? (
        <ActivityIndicator color="#5174F3" size="large" />
      ) : (
        <>
          <Text style={authStyles.title}>HOME</Text>
          <Text style={authStyles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Button
            text={'Next'}
            onPress={() => navigation.navigate('Register')}
          />
        </>
      )}
    </Container>
  );
};

export default Home;
