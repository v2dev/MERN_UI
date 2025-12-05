import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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

        {/* FAV */}
        <TouchableOpacity onPress={onFav} style={commonStyles.iconSpacing}>
          <MaterialIcons name="favorite-border" size={22} />
        </TouchableOpacity>

        {/* EDIT */}
        <TouchableOpacity onPress={onEdit} style={commonStyles.iconSpacing}>
          <MaterialIcons name="edit" size={22} />
        </TouchableOpacity>

      </View>
    </View>
  );
}
