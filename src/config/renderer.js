import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const iconContainer = {
  flexDirection: "row",
  alignItems: "center",
  gap: 15, // works in RN 0.71+, else use margin
};

export const RENDER_MAP = {
  contact: (item, onStarToggle, onEdit, onDelete) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 1,
        ...(item.favorite ? { backgroundColor: "lightblue" } : {}),
        overflow: "hidden",
        borderRadius: 18,
        paddingHorizontal: 10,
      }}
    >
      {/* Left Section */}
      <View>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>

      {/* Right Section (ALL icons in one row) */}
      <View style={iconContainer}>
        <TouchableOpacity onPress={onStarToggle}>
          <MaterialIcons
            name={item.favorite ? "star" : "star-outline"}
            size={22}
            color={item.favorite ? "green" : "grey"}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onEdit}>
          <MaterialIcons name="edit" size={22} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  ),

  book: (item, onStarToggle, onEdit, onDelete) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 1,
        ...(item.favorite ? { backgroundColor: "orange" } : {}),
        overflow: "hidden",
        borderRadius: 18,
        paddingHorizontal: 10,
      }}
    >
      {/* Left Section */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.author}</Text>
      </View>

      {/* Right Section (ALL icons in one row) */}
      <View style={iconContainer}>
        <TouchableOpacity onPress={onStarToggle}>
          <MaterialIcons
            name={item.favorite ? "star" : "star-outline"}
            size={22}
            color={item.favorite ? "green" : "grey"}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onEdit}>
          <MaterialIcons name="edit" size={22} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  ),
};
