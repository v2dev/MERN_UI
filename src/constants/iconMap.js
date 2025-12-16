import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export const CATEGORY_ICON_MAP = {
  contact: {
    name: "person-circle-outline",
    library: Ionicons,
  },
  book: {
    name: "book-outline",
    library: Ionicons,
  },
  movie: {
    name: "film-outline",
    library: Ionicons,
  },
  product: {
    name: "shopping-bag",
    library: MaterialIcons,
  },
  default: {
    name: "ellipse-outline",
    library: Ionicons,
  },
};
