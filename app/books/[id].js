import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useBookDetailById } from "../../src/viewmodels/useBookDetailById.js";

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  // const router = useRouter();

  const { detailedData, loading } = useBookDetailById(id);

  if (loading) return <Text>Loading...</Text>;
  console.log("detailedData:", detailedData);

  return (
    <FlatList
      data={detailedData}          // now array
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "#ccc" }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.book.name}</Text>
          <Text>{item.book.author}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

