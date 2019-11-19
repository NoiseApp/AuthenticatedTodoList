import React, {useState} from 'react';
import {FlatList, Text, CheckBox, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions';

import Container from '../../../components/common/Container';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import TodoCard from '../../../components/common/TodoCard';

const TodosList = ({navigation, todosList, editTodo}) => {
  const [filterValue, setFilterValue] = useState('');
  const filterTodos = todosList.filter(todo =>
    todo.title.toLowerCase().includes(filterValue.toLowerCase()),
  );

  const onChangeTodoStatus = (item, newValue) => {
    editTodo({...item, status: newValue});
  };

  console.log(todosList, 'list');
  return (
    <Container>
      <Input
        style={{marginTop: 16}}
        placeholder={'Search...'}
        name="search"
        onChange={(name, text) => setFilterValue(text)}
        onTouch={() => null}
        error={''}
      />
      <FlatList
        data={filterTodos}
        renderItem={({item}) => {
          return (
            <TodoCard
              checked={item.status}
              title={item.title}
              onValueChange={newValue => onChangeTodoStatus(item, newValue)}
            />
          );
        }}
        keyExtractor={item => `${item.title}`}
      />
      <Button
        style={{marginTop: 'auto', alignSelf: 'center', marginBottom: 24}}
        text="New Task"
        onPress={() => navigation.navigate('Add Todo')}
      />
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
)(TodosList);
