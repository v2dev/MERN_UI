import { ContactItem } from "@/components/ContactItem.js";
import { useContactDetailById } from "@/viewmodels/useContactDetailById.js";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text } from "react-native";

export default function ContactDetail() {
  const { id } = useLocalSearchParams();
  const { detailedData, loading } = useContactDetailById(id);

  if (loading) return <Text>Loading...</Text>;
  if (!detailedData) return <Text>No details found.</Text>;

  return (
    <FlatList
      data={[detailedData]} //API returns a single object, convert to array
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <ContactItem item={item} />}
    />
  );
}
