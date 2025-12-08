import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text } from "react-native";
import { useCategoryFirstLevelViewModel } from "../../src/viewmodels/useCategoryFirstLevelViewModel";

export default function CategoryContacts() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { dataList, loading, error } = useCategoryFirstLevelViewModel(id);

  console.log("Category Contacts Data List New:", dataList);

  if (!id) return <Text>No category selected</Text>;
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <FlatList
      data={dataList?.contacts || []}         
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
      <Text
        style={{ padding: 20 }}
        onPress={() => router.push(`/contact/${item._id}`)}
      >
        {item.username}Hello
      </Text>
)}

    />
  );
}
