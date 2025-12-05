import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useCategoriesViewModel } from "../src/viewmodels/useCategoriesViewModel.js";

export default function Categories() {
  const { categories, loading, error } = useCategoriesViewModel();
  const router = useRouter();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/category/${item._id}`)}
        >
          <Text style={{ padding: 20 }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
