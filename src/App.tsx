import React from 'react';
import { StyleSheet, View } from 'react-native';

import Nav from './nav/_Nav';
interface OwnState {
  isLoaded: boolean;
}
export default class App extends React.Component<any, OwnState> {
  public state = {
    isLoaded: false
  };
  public render() {
    return <Nav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
