import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { editBook, getBookById } from "../../src/api/booksApi";

export default function EditItemScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    author: "",
    publishedYear: "",
    genre: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load existing book data
  useEffect(() => {
    async function load() {
      try {
          const data = await getBookById(id);
          setForm({
          name: data.book.name || "",
          description: data.book.description || "",
          author: data.book.author || "",
          publishedYear: data.book.publishedYear.toString() || "",
          genre: data.book.genre || "",
        });
      } catch (err) {
        setError("Failed to load book details", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      await editBook(id, form);
      router.back();
    } catch (err) {
      console.error(err);
      setError("Failed to update book. Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Edit Book
      </Text>

      {error ? (
        <Text style={{ color: "red", marginBottom: 20 }}>{error}</Text>
      ) : null}

      {/* Input Fields */}
      {Object.entries(form).map(([field, value]) => (
        <TextInput
          key={field}
          placeholder={field}
          value={value}
          onChangeText={(text) => updateField(field, text)}
          style={{
            borderWidth: 1,
            padding: 12,
            marginBottom: 15,
            borderRadius: 8,
          }}
        />
      ))}

      {/* Save Button */}
      <TouchableOpacity
        onPress={handleSave}
        disabled={saving}
        style={{
          backgroundColor: "green",
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {saving ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Save Changes
          </Text>
        )}
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          backgroundColor: "#ccc",
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "black", fontSize: 16 }}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
