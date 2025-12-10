import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { deleteBook } from "../../src/api/booksApi";

export default function DeleteItemScreen() {
  const { id} = useLocalSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");
    try {
        await deleteBook(id)
        router.back();      // Return to previous screen
        } catch (err) {
            console.error(err);
            setError("Failed to delete item. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
        }}
        >
        <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold" }}>
            Confirm Delete
        </Text>

        <Text style={{ fontSize: 16, marginBottom: 40 }}>
            Are you sure you want to delete this item?
        </Text>

        {loading && <ActivityIndicator size="large" />}

        {error ? (
            <Text style={{ color: "red", marginBottom: 20 }}>{error}</Text>
        ) : null}

        <View style={{ flexDirection: "row", gap: 20 }}>
            {/* Delete Button */}
            <TouchableOpacity
            onPress={handleDelete}
            style={{
                backgroundColor: "red",
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 8,
            }}
            >
            <Text style={{ color: "white", fontSize: 16 }}>Delete</Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity
            onPress={() => router.back()}
            style={{
                backgroundColor: "#ccc",
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 8,
            }}
            >
            <Text style={{ color: "black", fontSize: 16 }}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
