import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from '../config/images';  // Ensure this contains { background: require('../assets/bg.png') }

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={Images.background} style={styles.background}>
      <View style={styles.overlay}>
        {/* App Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        {/* Welcome Message */}
        <Text style={styles.title}>Welcome to ChitChat</Text>
        <Text style={styles.subtitle}>Connect, chat, and share your moments!</Text>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 50, 0.7)', // Dark Blue Transparent Overlay
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#c0c0c0',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#0056b3', // Dark Blue
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome;
