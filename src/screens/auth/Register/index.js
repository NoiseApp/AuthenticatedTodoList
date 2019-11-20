import React, { useState } from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

import Button from "../../../components/common/Button";
import Container from "../../../components/common/Container"
import Input from "../../../components/common/Input"

import authStyles from "../styles"

const Register = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState("")

  const onNextPress = () => {
    auth().signInWithPhoneNumber(phoneNumber)
    .then(confirmResult => navigation.navigate("Verification", {confirmResult}))
    .catch(error => setError(error));
  }

  return (
    <Container style={{alignItems: "center", justifyContent: "center", marginHorizontal: 16}}>
      <Text style={authStyles.title}>Register</Text>
      <Text style={authStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      <View>
        <Text style={authStyles.inputLabel}>Phone Number</Text>
      <Input value={phoneNumber} placeholder={"Insert phone"} name="phone" onChange={(name,newText) => setPhoneNumber(newText)} onTouch={() => null} error={error}/>
      </View>
      <Button text={"Next"} onPress={onNextPress}/>
    </Container>
  )
}

export default Register
