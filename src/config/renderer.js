import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
const imagePath = "@/assets/default_human.png";
const imagePath_default = "@/assets/placeholder.png";
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
        paddingVertical: 10,
        ...(item.favorite ? { backgroundColor: "lightgrey" } : {}),
        overflow: "hidden",
        borderRadius: 18,
        paddingHorizontal: 10,
      }}
    >
      {/* LEFT SECTION */}
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        {/* CIRCULAR IMAGE */}
        <Image
          source={
            item.coverImage ? { uri: item.coverImage } : require(imagePath)
          }
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            marginRight: 10,
          }}
        />

        {/* TEXT */}
        <View>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
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
        paddingVertical: 10,
        ...(item.favorite ? { backgroundColor: "lightgrey" } : {}),
        overflow: "hidden",
        borderRadius: 18,
        paddingHorizontal: 10,
      }}
    >
      {/* LEFT SECTION */}
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        {/* CIRCULAR IMAGE */}
        <Image
          source={
            item.coverImage
              ? { uri: item.coverImage }
              : require(imagePath_default)
          }
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            marginRight: 10,
          }}
        />

        {/* TEXT */}
        <View>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.author}</Text>
        </View>
      </View>

      {/* RIGHT SECTION (icons row) */}
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
