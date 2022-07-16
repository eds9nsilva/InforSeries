import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from '../pages/loading';
import {Welcome} from '../pages/welcome';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator initialRouteName="Welcome">
      <App.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <App.Screen
        name="Loading"
        component={Loading}
        options={{headerShown: false}}
      />
    </App.Navigator>
  );
};
