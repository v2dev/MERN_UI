import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useDetailViewModel } from "../../src/viewmodels/useDetailViewModel.js";

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  console.log("BookDetail :: Category ID:", id);
  const router = useRouter();
  const { detailedData, loading } = useDetailViewModel(id);

  if (loading || !detailedData) return <Text>Loading Data 111111...</Text>;
  console.log("BookDetail :: Detailed Data:", detailedData);
  console.log("BookDetail :: Loading", loading);
  return (
    <FlatList
  data={detailedData}
  keyExtractor={(item) => item._id}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={{ padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}
      onPress={() => router.push(`/books/${item._id}`)}
    >
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text>{item.author}</Text>
    </TouchableOpacity>
  )}
/>

  );
}
