import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './auth/Home';
import Register from './auth/Register';
import Verification from './auth/Verification';
import TodosList from './todos/TodosList';
import AddTodo from './todos/AddTodo';

const authStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Register: {
      screen: Register,
    },
    Verification: {
      screen: Verification,
    },
  },
  {headerMode: 'none'},
);

const todosStack = createStackNavigator(
  {
    'Todos List': {
      screen: TodosList,
    },
    'Add Todo': {
      screen: AddTodo,
    },
  },
  {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: authStack,
    },
    Flow: {
      screen: todosStack,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(MainNavigator);
