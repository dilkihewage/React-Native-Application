import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        theme={{ colors: { primary: "#1E3A8A" } }}
      />

      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        theme={{ colors: { primary: "#1E3A8A" } }}
      />

      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Sign Up
      </Button>

      <Button mode="text" onPress={() => navigation.navigate("SignIn")} labelStyle={styles.linkText}>
        Already have an account? Sign In
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF", // White background
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#F8FAFC", // Light grayish background for inputs
  },
  button: {
    backgroundColor: "#1E3A8A", // Dark blue button
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  linkText: {
    color: "#1E3A8A",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});

export default SignUpScreen;
