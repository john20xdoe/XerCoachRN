// import React from 'react';
import { TabNavigator } from 'react-navigation';
import AccountNav from './AccountNav';
import ExercisesNav from './ExercisesNav';

export default TabNavigator(
  {
    Exercises: {
      screen: ExercisesNav
    },
    Account: {
      screen: AccountNav
    }
  }
);
