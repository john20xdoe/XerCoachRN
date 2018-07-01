import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabBarBottom, TabNavigator } from 'react-navigation';
import Colors from '../lib/Colors';
import AccountNav from './AccountNav';
import ExercisesNav from './ExercisesNav';

const setIcon = (name: string, focused: boolean) => (
  <MaterialCommunityIcons
    name={name}
    size={30}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
  );

export default TabNavigator(
  {
    Exercises: {
      screen: ExercisesNav
    },
    Account: {
      screen: AccountNav
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        return routeName.toUpperCase();
      },
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let icon: any;
        switch (routeName) {
          case 'Exercises':
            icon = setIcon('dumbbell', focused);
            break;
          case 'Account':
            icon = setIcon('account-circle', focused);
            break;
        }
        return icon;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: Colors.tabIconSelected,
      inactiveTintColor: Colors.tabIconDefault,
      labelStyle: {
        fontSize: 10
      },
      style: {
        height: 50
      }
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false
  }
);
