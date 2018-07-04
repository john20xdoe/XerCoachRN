//
import App from './src/App';
import { AppRegistry, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
AppRegistry.registerComponent('xercoachRN', () => App);
