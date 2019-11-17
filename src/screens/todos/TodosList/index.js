import React, {useState} from 'react'
import { FlatList} from 'react-native'
import {connect} from "react-redux";

import Container from "../../../components/common/Container"
import Input from "../../../components/common/Input"
import Button from "../../../components/common/Button"

const TodosList = ({navigation, todosList}) => {
  const [filterValue, setFilterValue] = useState("");
  const filterTodos = todosList.filter(todo => todo.title.toLowerCase().includes(filterValue.toLowerCase()))
  return (
    <Container>
      <Input style={{marginTop: 16}} placeholder={"Search..."} name="search" onChange={(name,text) => setFilterValue(text)} onTouch={() => null} error={""} />
      <FlatList data={filterTodos} renderItem={({item}) => {return <Text>Hey</Text>}} keyExtractor={(item) => item}/>
      <Button style={{marginTop: "auto", alignSelf: "center", marginBottom: 24}} text="New Task" onPress={() => navigation.navigate('Add Todo')} />
    </Container>
  )
}

const mapStateToProps = state => ({
  todosList: state.todos.todosList
})

export default connect(mapStateToProps,null)(TodosList);
