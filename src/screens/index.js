import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Home from "./auth/Home"
import Register from "./auth/Register"
import Verification from "./auth/Verification"
import TodosList from "./todos/TodosList"
import AddTodo from "./todos/TodosList"

const authStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Register: {
      screen: Register
    },
    Verification: {
      screen: Verification
    }
  },
  { headerMode: 'none' }
);

const todosStack = createStackNavigator({
  "Todos List": {
    screen: TodosList,
  },
  'Add Todo': {
    screen: AddTodo,
  },
});

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: authStack
    },
    Flow: {
      screen: todosStack
    }
  },
  {
    headerMode: 'none'
  }
);


export default createAppContainer(MainNavigator);