import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppCard = ({ children, style }) => {
  return <View style={{ ...styles.default, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', // iso
    shadowRadius: 2, // iso
    shadowOpacity: 0.3, // iso
    shadowOffset: { width: 2, height: 2 }, // iso
    elevation: 8, // android
    backgroundColor: '#fff',
    borderRadius: 10
  }
});
