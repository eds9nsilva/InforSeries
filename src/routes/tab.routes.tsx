import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../pages/Home/Home';
import {Feather} from '@expo/vector-icons';
import {colors} from '../global/styles/colors';
const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Remove o default
        tabBarHideOnKeyboard: true, // Desaparece quando aciona o teclado
        tabBarActiveTintColor: colors.red, // cor para quando o item tiver ativo
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.gray,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather size={25} name="home" color={color} />
          ),
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather size={25} name="compass" color={color} />
          ),
          title: 'Explore',
        }}
        name="Explore"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Feather size={25} name="bookmark" color={color} />
          ),
          title: 'My Favorites',
        }}
        name="Favorite"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
