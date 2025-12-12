import { BookItem } from "@/components/BookItem.js";
import { useBookDetailById } from "@/viewmodels/useBookDetailById.js";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  const { data: book, loading, error } = useBookDetailById(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!book) return <Text>No details found.</Text>;

  return <BookItem item={book} />;
}
