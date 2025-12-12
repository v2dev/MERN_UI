import { Text, View } from "react-native";

export const BookItem = ({ item }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.book.name}</Text>
      <Text style={{ marginTop: 5 }}>{item.book.author}</Text>
    </View>
  );
};
