import { useLocalSearchParams } from "expo-router";
import { FlatList, Text } from "react-native";
import { ContactItem } from "../../src/components/ContactItem.js";
import { useContactDetailById } from "../../src/viewmodels/useContactDetailById.js";

export default function ContactDetail() {
  const { id } = useLocalSearchParams();
  const { detailedData, loading } = useContactDetailById(id);

  if (loading) return <Text>Loading...</Text>;
  if (!detailedData) return <Text>No details found.</Text>;

  return (
    <FlatList
      data={[detailedData]} // your API returns a single object, convert to array
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
}
