import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from '../pages/loading/Loading';
import {Welcome} from '../pages/welcome';
import {Home} from '../pages/Home/Home';
import {Details} from '../pages/Details/Details';
import { colors } from '../global/styles/colors';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator initialRouteName="Loading">
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
      <App.Screen name="Home" component={Home} options={{headerShown: false}} />
      <App.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.gray,
          },
        }}
      />
    </App.Navigator>
  );
};
