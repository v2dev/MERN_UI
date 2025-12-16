import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";

export const BookItem = ({ item }) => {
  return (
    <>
      <Stack.Screen options={{ title: `${item.book?.name || "Details"}` }} />

      <View
        style={{
          paddingVertical: 30,
          alignItems: "center", // center horizontally
          justifyContent: "center",
        }}
      >
        {/* IMAGE */}
        <Image
          source={
            item.book?.image
              ? { uri: item.book.image }
              : require("@/assets/placeholder.png")
          }
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 15,
          }}
        />

        {/* NAME */}
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
          {item.book?.name || "Unknown Book"}
        </Text>

        {/* AUTHOR */}
        <Text style={{ fontSize: 16, color: "#555" }}>
          {item.book?.author || "Unknown Author"}
        </Text>
      </View>
    </>
  );
};
