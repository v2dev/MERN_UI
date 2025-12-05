import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useContactDetailViewModel } from "../../src/viewmodels/useContactDetailViewModel.js";

export default function ContactDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { contact, loading } = useContactDetailViewModel(id);

  if (loading || !contact) return <Text>Loading...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {contact?.username}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
