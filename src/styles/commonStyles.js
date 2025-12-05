import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const commonStyles = StyleSheet.create({
  screenBackground: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.md,
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
  },

  textNormal: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },

  divider: {
    height: 1,
    backgroundColor: theme.colors.divider,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconSpacing: {
    marginLeft: theme.spacing.md,
  },
});
