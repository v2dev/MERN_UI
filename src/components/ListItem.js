import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";

export default function ListItem({
  title,
  onPress,
  starred,
  onStarToggle,
  onEdit,
  onFav,
}) {
  return (
    <View style={commonStyles.rowContainer}>
      {/* LEFT SIDE */}
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
        <Text style={commonStyles.textNormal}>{title}</Text>
      </TouchableOpacity>

      {/* RIGHT SIDE ICONS */}
      <View style={commonStyles.iconRow}>
        {/* STAR */}
        <TouchableOpacity onPress={onStarToggle}>
          <Ionicons
            name={starred ? "star" : "star-outline"}
            size={22}
            color={starred ? "red" : "grey"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
