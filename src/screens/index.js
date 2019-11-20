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

const todosStack = createStackNavigator({
  'Todos List': {
    screen: TodosList,
    navigationOptions: {
      headerStyle: {elevation: 0, borderBottomWidth: 0},
    },
  },
  'Add Todo': {
    screen: AddTodo,
    navigationOptions: {
      headerStyle: {elevation: 0, borderBottomWidth: 0},
    },
  },
});

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
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(MainNavigator);
