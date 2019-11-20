import React from 'react';
import {CheckBox} from 'react-native-elements';

const TodoCard = ({title, checked, onValueChange, onDeleteTodo}) => {
  return (
    <CheckBox
      title={title}
      checked={checked}
      onPress={() => onValueChange(!checked)}
      onLongPress={() => onDeleteTodo({title})}
    />
  );
};

export default TodoCard;
