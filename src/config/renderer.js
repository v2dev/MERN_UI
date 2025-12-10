import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";



export const RENDER_MAP = {
    contact: (item) => (
      <>
        <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
        {/* add more contact fields here */}
      </>
    ),

    Books: (item, onDelete) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text>{item.author}</Text>
      </View>

      <TouchableOpacity onPress={onDelete} style={commonStyles.iconSpacing}>
        <MaterialIcons name="edit" size={22} />
      </TouchableOpacity>
    </View>
  )

};
