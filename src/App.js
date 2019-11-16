import React from 'react';
import { Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import store from './redux/store';
import Navigator from './screens';

EStyleSheet.build({
  $primaryLight: '#BCCAEF',
  $primaryDark: '#5174F3',
  $inputRadius: 12,
  $screenWidth: Dimensions.get('window').width,
  $screenHeight: Dimensions.get('window').height,
});

const App = () =>
    (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
 
export default App;