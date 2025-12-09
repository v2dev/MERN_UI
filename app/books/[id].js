import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { BookItem } from "../../src/components/BookItem.js";
import { useBookDetailById } from "../../src/viewmodels/useBookDetailById.js";

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  const { data: book, loading, error } = useBookDetailById(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!book) return <Text>No details found.</Text>;

  return <BookItem item={book} />;
}
