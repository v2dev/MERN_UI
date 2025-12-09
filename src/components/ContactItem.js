import { Text, TouchableOpacity } from "react-native";

export const ContactItem = ({ item }) => {
  const contact = item;
  return (
    <TouchableOpacity
      style={{
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>
        {contact?.username || "Unknown Contact"}
      </Text>

      <Text>{contact?.email || "Unknown Email"}</Text>
    </TouchableOpacity>
  );
};
