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

interface OwnProps {
  navigation: any;
}

interface OwnState {
}

export default class StartScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: 'XerCoach'
    };
  }
  public render() {
    const exercises = ['Calf raise', 'Plank', 'Piriformis stretch'];
    const head = (
      <View style={styles.header}>
        <View style={styles.command}>
          <Text style={{ fontSize: 20 }}>XerCoach</Text>
          <Text>Start Exercise</Text>
        </View>
        <View style={styles.commandButtons}>
          <IconButton style={{ width: 40 }}
            iconChild={<Ionicons name='play-circle' size={40} />}
            onPress={() => Alert.alert('Starting...')} />
          <IconButton style={{ marginLeft: 4, width: 40 }}
            iconChild={<Ionicons name='refresh' size={40} />}
            onPress={() => Alert.alert('Reset to beginning?')} />
        </View>
      </View >);
    const body = (
      <View style={styles.body}>
        <Swiper showsButtons={true}>
          {exercises.map((exercise, i) => {
            const isStart = i === 0;
            const isLast = i === (exercises.length - 1);
            return (
              <Card key={i} backColor='#9DEFEB' exercise={exercise} />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 248, 248)',
    ...StyleSheet.absoluteFillObject
  },
  header: {
    height: 75,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
