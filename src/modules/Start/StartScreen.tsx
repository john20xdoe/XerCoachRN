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

import { exercises, userSets } from '../../../api/mock.json';

interface OwnProps {
  navigation: any;
}

interface OwnState {
  userExercises: UserExercise[];
  isExercising: boolean;
  soundOn: boolean;
  currentUserSet: number;
}

export default class StartScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: 'XerCoac'
    };
  }

  public readonly state = {
    isExercising: false,
    userExercises: userSets,
    currentUserSet: 0,
    soundOn: true
  };

  public render() {
    const { isExercising, userExercises, soundOn, currentUserSet } = this.state;
    const currentExercises: any[] = _.map(userExercises,
      (set: UserExercise) => _.find(exercises, ['key', set.exerciseKey]));

    const head = (
      <View style={styles.header}>
        <View style={styles.command}>
          <Text style={{ fontSize: 25 }}>XerCoach</Text>
        </View>
        <View style={styles.commandButtons}>
          <IconButton style={{ width: 25, elevation: 5 }}
            iconChild={<Ionicons name={soundOn ? 'bullhorn' : 'volume-off'} size={25}
              color={Colors.xerTextDarkGray} />}
            onPress={() => this.onToggleSound(soundOn)} />
        </View>
      </View >);
    const body = (
      <View style={styles.body}>
        {/* TODO add computation of current time for Card */}
        <Swiper showsButtons={currentExercises.length > 1} index={currentUserSet}>
          {currentExercises.map((exercise, i) => {
            const isStart = i === 0;
            const isLast = i === (exercises.length - 1);
            return (
              <Card key={i} backColor={exercise.duration.backColor} exercise={exercise} />
            );
          })}
        </Swiper>
      </View>);
    const controls = (
      <View style={styles.controls}>
        <View style={styles.command}>
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

    return (
      <View style={styles.container}>
        {head}
        {body}
        {controls}
      </View>
    );
  }

  private onTogglePlayPlause = (isExercising: boolean) => {
    this.setState({ isExercising: !isExercising });
  }
  private onToggleSound = (soundOn: boolean) => {
    this.setState({ soundOn: !soundOn });
  }
  private onReset = () => {
    Alert.alert('Reset to beginning?');
  }
  // private onEndSet = (state: OwnState) => {
  //   this.setState({
  //     currentUserSet: state.currentUserSet + 1
  //   });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  },
  header: {
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...GlobalStyles.elevationShadow
  },
  controls: {
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...GlobalStyles.elevationShadow
  },
  command: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  commandButtons: {
    flexDirection: 'row',
    marginLeft: 'auto'
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    paddingVertical: 20
  }
});
