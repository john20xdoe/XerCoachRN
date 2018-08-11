import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import Colors from '../lib/Colors';
import { Exercise } from '../lib/Typings';
import { ButtonProps } from './Buttons';

interface CardProps {
  exercise: Exercise;
  isExercising: boolean;
  backColor: string;
}

const Card: React.SFC<CardProps> = ({ isExercising, backColor, exercise }) => (
  <View style={[styles.slide, { backgroundColor: backColor }]}>
    <Text style={styles.title}>{exercise.title}</Text>

    <View>
      <Text style={styles.panelTitle}>
        Prepare
      </Text>

    </View>
    <View>
      <Text style={styles.panelTitle}>
        Exercise
       </Text>

    </View>
    <View>
      <Text style={styles.panelTitle}>
        Break
       </Text>

    </View>
  </View>
);

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  panelTitle: {
    elevation: 2,
    borderRadius: 4
  }
});

// const mapStateToProps = (state: All): ConnectedState => ({
// });

// export default connect(
//   mapStateToProps
// )(Card);

export default Card;
