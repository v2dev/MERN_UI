import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export const RENDER_MAP = {
  contact: (item) => (
    <>
      <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
      {/* add more contact fields here */}
    </>
  ),

  Books: (item, onEdit, onDelete) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {/* Left Section (Text) */}
      <View>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.author}</Text>
      </View>

      {/* Right Section (Icons) */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onEdit} style={{ marginLeft: 15 }}>
          <MaterialIcons name="edit" size={22} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete} style={{ marginLeft: 15 }}>
          <MaterialIcons name="delete" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  ),
};
