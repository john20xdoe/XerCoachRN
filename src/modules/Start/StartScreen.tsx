import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
    const head = (
      <View style={styles.header}>
        <View>
         <Text style={{fontSize: 20}}>Start</Text>
        </View>
      </View>);
    const body = (
      <View style={styles.body}>
        <Text>Start Exercise</Text>
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
    padding: 16
  },
  body: {
    padding: 8
  }
});
