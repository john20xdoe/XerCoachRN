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
  selectedSwitch: string;
}

export default class ExercisesScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: 'Exercises'
    };
  }
  public readonly state = { selectedSwitch: 'Stats' };
  public render() {
    let body = null;
    if (this.state.selectedSwitch === 'Stats') {
      body = <View>
        <Text>AccountStats Here</Text>
      </View>;
    } else {
      body = (
        <View>
        <Text>Profile Here</Text>
      </View>);
    }
    return (
      <View style={styles.container}>

        {body}
      </View>
    );
  }

  private onSwitchSelection(selection: string) {
    this.setState({
      selectedSwitch: selection
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
