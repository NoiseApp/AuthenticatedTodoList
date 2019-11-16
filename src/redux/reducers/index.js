import { combineReducers } from 'redux';
import {todosReducer as todosList} from "./todosReducer"

export default combineReducers({
  todosList
});
