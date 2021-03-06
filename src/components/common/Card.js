import React from 'react';
import { View } from 'react-native';

export const Card = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
  }
};
