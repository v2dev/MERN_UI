import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { loginApi } from "../app/src/api/api";

// import { fetchContacts } from "../app/src/api/api"; // Path: app


export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("three");
  const [email, setEmail] = useState("Three@yopmail.com");
  const [password, setPassword] = useState("123456");

  const onLogin = async () => {
    try {
      await loginApi({ name, email, password });
      router.replace("/contacts");
    } catch (err) {
      Alert.alert("Login Failed", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  }
});
