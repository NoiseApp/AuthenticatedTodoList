import React from 'react'
import { Text } from 'react-native'

import Container from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

const AddTodo = ({navigation}) => {
  return (
    <Container style={{alignItems: "center", justifyContent: "center", marginHorizontal: 16}}>
        <Text style={{textAlign: "center", fontSize: 14, marginBottom: 16}}>Task Title</Text>
      <Input placeholder={"Insert task"} name="verification" onChange={() => null} onTouch={() => null} error={""}/>
      <Button text="New Task" onPress={() => navigation.navigate('Add Todo')} />
      </Container>
  )
}

export default AddTodo;
