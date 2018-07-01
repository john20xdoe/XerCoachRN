import React from 'react';
import { StackNavigator } from 'react-navigation';

import AccountNav from './AccountNav';
import ExercisesNav from './ExercisesNav';
import MainNav from './MainNav';

const RootStackNav = StackNavigator(
  {
    Main: {
      screen: MainNav
    },
    Exercises: {
      screen: ExercisesNav
    },
    Account: {
      screen: AccountNav
    }
  }
);

export default class Nav extends React.Component {
  public render() {
    return <RootStackNav />;
  }
}
