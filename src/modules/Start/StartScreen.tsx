import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import Card from '../../components/Card';

interface OwnProps {
  navigation: any;
}

interface OwnState {
}

export default class StartScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      headerTitle: (
        <View style={styles.logoContainer}>
          <Text>XerCoach</Text>
        </View>
      ),
      headerTransparent: true,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0,
        zIndex: 2
      }
    };
  }
  public render() {
    const exercises = ['Calf raise', 'Plank', 'Piriformis stretch'];
    const head = (
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 20 }}>Start</Text>
          <Text>Start Exercise</Text>
        </View>
      </View>);
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
    flexDirection: 'column',
    ...StyleSheet.absoluteFillObject
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 75,
    padding: 16
  },
  body: {
    flex: 1
  }
});
