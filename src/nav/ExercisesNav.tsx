import { StackNavigator } from 'react-navigation';
import ExerciseDetailScreen from '../modules/Exercises/ExerciseDetailScreen';
import ExercisesScreen from '../modules/Exercises/ExercisesScreen';

export default StackNavigator(
  {
    ExercisesList: {
      screen: ExercisesScreen,
      navigationOptions: {
        headerTitleStyle: { marginLeft: 'auto', marginRight: 'auto' }
      }
    },
    ExerciseDetail: {
      screen: ExerciseDetailScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    initialRouteName: 'ExercisesList'
  }
);
