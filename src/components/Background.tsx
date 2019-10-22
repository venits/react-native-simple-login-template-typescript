import React, { memo } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => {
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default memo(Background);
