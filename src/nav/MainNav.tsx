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
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        return routeName.toUpperCase();
      }
    }),
    animationEnabled: false,
    swipeEnabled: false
  }
);
