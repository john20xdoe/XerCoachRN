import _ from 'lodash';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconButton } from '../../components/Buttons';
import Card from '../../components/Card';
import Colors from '../../lib/Colors';
import GlobalStyles from '../../lib/GlobalStyles';
import { Exercise, SoundOption, UserExercise } from '../../lib/Typings';

interface OwnProps {
  navigation: any;
}

interface OwnState {
  userExercises: UserExercise[];
  isExercising: boolean;
}

const exercises: Exercise[] = [
  {
    key: 'calf-raise',
    title: 'Calf Raise',
    soundOption: SoundOption.Voice,
    prepare: {
      seconds: 5,
      backColor: '#efaaef'
    },
    duration: {
      seconds: 10,
      backColor: '#efffed'
    },
    break: {
      seconds: 10,
      backColor: '#efef23'
    }
  }
];

const userSets: UserExercise[] = [
  {
    exerciseKey: 'calf-raise',
    username: 'la1255',
    sequenceNumber: 1,
    enabled: true,
    reps: 5,
    dateAdded: Date.now()
  }
];

export default class StartScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: 'XerCoach'
    };
  }

  public readonly state = {
    isExercising: false,
    userExercises: userSets
  };

  public render() {
    const { isExercising, userExercises } = this.state;
    const currentExercises: any[] = _.map(userExercises,
      (set: UserExercise) => _.find(exercises, ['key', set.exerciseKey]));

    const head = (
      <View style={styles.header}>
        <View style={styles.command}>
          <Text style={{ fontSize: 30 }}>XerCoach</Text>
        </View>
        <View style={styles.commandButtons}>
          <IconButton style={{ width: 40, elevation: 5 }}
            iconChild=
            {<Ionicons name={isExercising ? 'pause-circle' : 'play-circle'} size={40}
              color={isExercising ? Colors.tabIconSelected : Colors.xerTextDarkGray} />}
            onPress={() => this.onTogglePlayPlause(isExercising)} />
          <IconButton style={{ marginLeft: 4, width: 40 }}
            iconChild={<Ionicons name='refresh' size={40} />}
            onPress={() => this.onReset()} />
        </View>
      </View >);
    const body = (
      <View style={styles.body}>
        <Swiper showsButtons={currentExercises.length > 1}>
          {currentExercises.map((exercise, i) => {
            const isStart = i === 0;
            const isLast = i === (exercises.length - 1);
            return (
              <Card key={i} backColor={exercise.duration.backColor} exercise={exercise} />
            );
          })}
        </Swiper>
      </View>);

    return (
      <View style={styles.container}>
        {head}
        {body}
      </View>
    );
  }

  private onTogglePlayPlause = (isExercising: boolean) => {
    this.setState({ isExercising: !isExercising });
  }
  private onReset = () => {
    Alert.alert('Reset to beginning?');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  },
  header: {
    height: 75,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...GlobalStyles.elevationShadow
  },
  command: {
    // backgroundColor: 'green'
  },
  commandButtons: {
    flexDirection: 'row',
    marginLeft: 'auto'
    // backgroundColor: 'red'
  },
  body: {
    flex: 1
  }
});
