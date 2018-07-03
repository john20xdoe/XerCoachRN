import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import Colors from '../lib/Colors';
import { Exercise } from '../lib/Typings';
import { ButtonProps } from './Buttons';

interface CardProps {
  exercise: string; // Exercise;
  backColor: string;
}

const Card: React.SFC<CardProps> = ({ backColor, exercise }) => (
  <View style={[styles.slide, {backgroundColor: backColor}]}>
    <Text style={styles.text}>{exercise}</Text>
  </View>
);

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

// const mapStateToProps = (state: All): ConnectedState => ({
// });

// export default connect(
//   mapStateToProps
// )(Card);

export default Card;
