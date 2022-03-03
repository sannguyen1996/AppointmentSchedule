import {StyleSheet, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';

const Header = ({title}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: -1}}
      colors={[colors.green, colors.blue]}
      style={styles.linearHeader}>
      <Text style={styles.txtHeader}>{title}</Text>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  txtHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linearHeader: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
