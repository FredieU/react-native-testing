import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/welcome_background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.slogan}>Freelancing made easy.</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#fc5c65',
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#4ecdc4',
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
  slogan: {
    paddingTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
