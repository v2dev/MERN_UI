import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useCategoryFirstLevelViewModel } from "../src/viewmodels/useCategoryFirstLevelViewModel.js";

export default function Contacts() {
  const { dataList, loading, error } = useCategoryFirstLevelViewModel();
  console.log("dataList in contacts :: ", dataList);
  
  const router = useRouter();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={dataList}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/contact/${item._id}`)}
        >
          <Text style={{ padding: 20 }}>{item.username} user</Text>
        </TouchableOpacity>
      )}
    />
  );
}
