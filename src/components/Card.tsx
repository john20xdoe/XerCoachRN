import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import Colors from '../lib/Colors';
import { Exercise } from '../lib/Typings';
import { ButtonProps } from './Buttons';

interface CardProps {
  exercise: Exercise;
  backColor: string;
}

const Card: React.SFC<CardProps> = ({ backColor, exercise }) => (
  <View style={[styles.slide, {backgroundColor: backColor}]}>
    <Text style={styles.text}>{exercise.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

// const mapStateToProps = (state: All): ConnectedState => ({
// });

// export default connect(
//   mapStateToProps
// )(Card);

export default Card;
