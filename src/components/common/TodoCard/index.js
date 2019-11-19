import React from 'react';
import {View, Text, CheckBox} from 'react-native';

const TodoCard = ({title, checked, onValueChange}) => {
  return (
    <View>
      <CheckBox
        value={checked}
        onValueChange={newValue => onValueChange(newValue)}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default TodoCard;
