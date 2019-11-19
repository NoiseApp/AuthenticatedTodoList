import React, {useState} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions';

import Container from '../../../components/common/Container';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';

const AddTodo = ({todosList, addTodo}) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const onAddTodoPress = () => {
    if (!inputValue.length) {
      return;
    }

    if (!checkIfInputFilledWithSpaces()) {
      return setError('*Input lleno de espacios');
      //error lleno de espacios
    }

    if (todoCheckIfAlreadyExists()) {
      console.log('err exists');
      return setError('*La tarea ya existe'); //error todo exists
    }

    addTodo({title: inputValue.trim(), status: false});
    setError('');
    setInputValue('');
  };

  const todoCheckIfAlreadyExists = () => {
    const todoExists = todosList.some(
      e => e.title.toLowerCase() === inputValue.trim().toLowerCase(),
    );

    return todoExists;
  };

  const checkIfInputFilledWithSpaces = () => {
    return inputValue.match('.*\\w.*');
  };

  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
      }}>
      <Text style={{textAlign: 'center', fontSize: 14, marginBottom: 16}}>
        Task Title
      </Text>
      <Input
        placeholder={'Insert task'}
        name="verification"
        value={inputValue}
        onChange={(name, text) => setInputValue(text)}
        onTouch={() => null}
        error={error}
      />
      <Button text="New Task" onPress={onAddTodoPress} />
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
});

const mapStateToProps = state => ({
  todosList: state.todos.todosList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
