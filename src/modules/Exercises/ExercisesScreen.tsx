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

export default class ExercisesScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: 'Exercises'
    };
  }
  public render() {
    let body = null;
    body = (
      <View>
        <Text>Exercise Screen</Text>
      </View>);

    return (
      <View style={styles.container}>
        {body}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
