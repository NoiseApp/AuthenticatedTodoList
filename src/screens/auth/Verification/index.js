import React, { useState } from 'react';
import {View, Text} from 'react-native';

import Button from '../../../components/common/Button';
import Container from '../../../components/common/Container';
import Input from '../../../components/common/Input';

import authStyles from '../styles';

const Verification = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("")
  
  const onNextPress = () => {
    navigation.state.params.confirmResult.confirm(verificationCode)
    .then(user => {
      console.log(user);
      navigation.navigate('Todos List')
    })
    .catch(error => setError(error))
  }

  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
      }}>
      <Text style={authStyles.title}>Verification</Text>
      <Text style={authStyles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <View>
        <Text style={authStyles.inputLabel}>Verification Code</Text>
        <Input
          value={verificationCode}
          placeholder={'Insert phone'}
          name="verification"
          onChange={(name,newCode) => setVerificationCode(newCode)}
          onTouch={() => null}
          error={error}
        />
      </View>
      <Button text={'Next'} onPress={onNextPress} />
    </Container>
  );
};

export default Verification;
