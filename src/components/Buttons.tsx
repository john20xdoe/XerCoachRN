
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../lib/Colors';

export interface ButtonProps {
  onPress: () => void;
  tintColor?: string;
}

export const UserAccountButton: React.SFC<ButtonProps> = ({ onPress }) => (
  <Touchable
    onPress={onPress}
    style={styles.touchable}>
    <View
      style={styles.headerButton}>
      <Ionicons
        name='ios-contact'
        size={28}
      />
    </View>
  </Touchable>
);

export const BackButton: React.SFC<ButtonProps> = ({ onPress, tintColor }) => (
  <Touchable
    onPress={onPress}
    style={styles.touchable}>
    <View
      style={styles.headerButton}>
      <Ionicons
        name='ios-contact'
        size={28}
        style={{ color: tintColor || Colors.xerTextMediumGray }}
      />
    </View>
  </Touchable>
);

export const BackCloseButton: React.SFC<ButtonProps> = ({ onPress, tintColor }) => (
  <Touchable
    onPress={onPress}
    style={styles.touchable}>
    <View
      style={styles.headerButton}>
      <Ionicons
        name='md-close'
        size={28}
        style={{ color: tintColor || Colors.xerTextMediumGray }}
      />
    </View>
  </Touchable>
);

interface RoundedButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  text: string;
}

export const RoundedButton: React.SFC<RoundedButtonProps> = ({ onPress, style = null, textStyle = null, text }) => (
  <Touchable
    style={[styles.roundedButton, style]}
    onPress={onPress}
  >
    <Text style={[styles.roundedButtonText, textStyle]}>
      {text}
    </Text>
  </Touchable>
);

interface IconButtonProps extends ButtonProps {
  iconChild: any;
  style: StyleProp<ViewStyle>;
  disabled?: boolean;
}
export const IconButton: React.SFC<IconButtonProps> = (props) => (
  <Touchable
    {...props}
  >
    {props.iconChild}
  </Touchable>
);

export const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: 'row'
  },
  headerButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    paddingHorizontal: 16,
    alignSelf: 'center'
  },
  badge: {
    backgroundColor: 'rgb(245, 213, 79)',
    position: 'absolute',
    alignSelf: 'center',
    padding: 2,
    width: 10,
    height: 10,
    right: -3,
    top: -2
  },
  badgeText: {
    fontSize: 9,
    fontWeight: 'bold',
    textShadowColor: '#000000FF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  hidden: {
    opacity: 0
  },
  roundedButton: {
    alignSelf: 'center',
    marginBottom: 2,
    backgroundColor: Colors.xerLightBlue,
    borderRadius: 28,
    width: 235,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  roundedButtonText: {
    fontSize: 15,
    color: '#fff',
    paddingTop: 3
  }
});
