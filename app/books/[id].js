import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { useDetailViewModel } from "../../src/viewmodels/useDetailViewModel.js";

export default function ContactDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { detailedData, loading } = useDetailViewModel(id);

  if (loading || !detailedData) return <Text>Loading...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text>Book: {detailedData?.name}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
