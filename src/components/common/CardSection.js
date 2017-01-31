import React from 'react';
import { View } from 'react-native';

export const CardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',

  }
};

