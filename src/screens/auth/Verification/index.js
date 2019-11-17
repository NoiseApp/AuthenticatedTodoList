import React from 'react'
import { View, Text } from 'react-native'
import Button from "../../../components/common/Button";
import Container from "../../../components/common/Container"
import Input from "../../../components/common/Input"

import authStyles from "../styles"

const Verification = ({navigation}) => {
  return (
    <Container style={{alignItems: "center", justifyContent: "center", marginHorizontal: 16}}>
      <Text style={authStyles.title}>Verification</Text>
      <Text style={authStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      <View>
        <Text style={authStyles.inputLabel}>Verification Code</Text>
      <Input placeholder={"Insert phone"} name="verification" onChange={() => null} onTouch={() => null} error={""}/>
      </View>
      <Button text={"Next"} onPress={() => navigation.navigate("Register")}/>
    </Container>
  )
}

export default Verification
