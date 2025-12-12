import { loginApi } from "@/api/loginApi.js";
import InputField from "@/components/InputField";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "three",
    email: "Three@yopmail.com",
    password: "123456",
  });

  const [loading, setLoading] = useState(false);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name cannot be empty";
    if (!form.email.trim()) return "Email cannot be empty";
    if (!form.password.trim()) return "Password cannot be empty";
    return null;
  };

  const onLogin = async () => {
    const error = validateForm();
    if (error) {
      Alert.alert("Validation Error", error);
      return;
    }

    try {
      setLoading(true);
      await loginApi(form);
      router.replace("/categories");
    } catch (err) {
      Alert.alert("Login Failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputField
        label="Name"
        value={form.name}
        onChangeText={(v) => updateField("name", v)}
      />

      <InputField
        label="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(v) => updateField("email", v)}
      />

      <InputField
        label="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(v) => updateField("password", v)}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Login" onPress={onLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "600",
  },
});
