import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator } from "react-native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setError(""); // Reset error message
    setLoading(true);
    
    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Button
        title={loading ? "Signing In..." : "Sign In"}
        onPress={handleSignIn}
        disabled={loading}
      />

      {loading && <ActivityIndicator size="small" color="#0000ff" />}

      <Button title="Go to Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default SignInScreen;
