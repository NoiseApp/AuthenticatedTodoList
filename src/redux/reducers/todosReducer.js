import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actions/types";

const initialState = { todosList: [] };

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todosList: [action.payload, ...todosList] };
    case REMOVE_TODO:
      return { ...state, todosList: state.todosList.filter(todo => action.payload.title !== todo.title) };
    case EDIT_TODO:
      return { ...state, todosList: state.todosList.map(todo => action.payload.title === todo.title ? action.payload : todo) };
    default:
      return state;
  }
};