import { StackNavigator } from 'react-navigation';
import AccountScreen from '../modules/Account/AccountScreen';
import AccountStatsScreen from '../modules/Account/AccountStatsScreen';

export default StackNavigator(
  {
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        headerTitleStyle: { marginLeft: 'auto', marginRight: 'auto' }
      }
    },
    Stats: {
      screen: AccountStatsScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    initialRouteName: 'Account'
  }
);
