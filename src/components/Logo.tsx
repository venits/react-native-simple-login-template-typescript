import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => <Image source={{ uri: null }} style={styles.image} />;

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    backgroundColor: 'red',
  },
});

export default memo(Logo);
