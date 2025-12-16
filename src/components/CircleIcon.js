import { CATEGORY_ICON_MAP } from "@/constants/iconMap";
import { View } from "react-native";

export const CategoryCircleIcon = ({ type }) => {
  const icon = CATEGORY_ICON_MAP[type] || CATEGORY_ICON_MAP.default;
  const IconComponent = icon.library;

  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#e6e6e6",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <IconComponent name={icon.name} size={24} color="black" />
    </View>
  );
};
