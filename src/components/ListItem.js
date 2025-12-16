import { CategoryCircleIcon } from "@/components/CircleIcon";
import { commonStyles } from "@/styles/commonStyles";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function ListItem({
  title,
  onPress,
  starred,
  onStarToggle,
  onEdit,
  onFav,
  type,
}) {
  return (
    <View style={commonStyles.rowContainer}>
      {/* LEFT CIRCULAR ICON */}
      <CategoryCircleIcon type={type} />

      {/* TITLE */}
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
        <Text style={commonStyles.textNormal}>{title}</Text>
      </TouchableOpacity>

      {/* RIGHT SIDE ICONS */}
      <View style={commonStyles.iconRow}>
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
