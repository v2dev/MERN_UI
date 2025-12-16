import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";

export const ContactItem = ({ item }) => {
  const contact = item;
  return (
    <>
      <Stack.Screen options={{ title: `${contact?.name || "Details"}` }} />

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
            contact?.image
              ? { uri: contact.image }
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
          {contact?.name || "Unknown Contact"}
        </Text>

        {/* EMAIL */}
        <Text style={{ fontSize: 16, color: "#555" }}>
          {contact?.email || "Unknown Email"}
        </Text>
      </View>
    </>
  );
};
