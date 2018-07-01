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

export default class AccountScreen extends React.Component<OwnProps, OwnState> {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: 'Account'
    };
  }
  public render() {
    let body = null;
    body = (
      <View>
        <Text>Profile Here</Text>
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
