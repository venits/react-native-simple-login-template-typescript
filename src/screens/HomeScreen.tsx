import React, { memo } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Headline, Paragraph, Button } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';

const HomeScreen = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Headline>Login Template</Headline>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
