import { ContactItem } from "@/components/ContactItem";
import { useContactDetailById } from "@/viewmodels/useContactDetailById";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text } from "react-native";

export default function ContactDetailScreen() {
  const { id } = useLocalSearchParams();
  const { detailedData, loading, error } = useContactDetailById(id);

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;
  if (error) return <Text>{error}</Text>;
  if (!detailedData) return <Text>No details found.</Text>;

  return <ContactItem item={detailedData} />;
}
