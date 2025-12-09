import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { RENDER_MAP } from "../../src/config/renderer";
import { ROUTE_MAP } from "../../src/config/routeMap";
import { useDetailViewModel } from "../../src/viewmodels/useDetailViewModel";

/**
 * This component displays detailed data for a specific category based on its type.
 */

export default function CategoryDetailData() {
    const { id, type } = useLocalSearchParams();
    const router = useRouter();

    const { detailedData, loading, error } = useDetailViewModel(id, type);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error}</Text>;
    if (!detailedData || detailedData.length === 0) return <Text>No data found</Text>;

    const displayContent = (type, item) => {
      const renderer = RENDER_MAP[type];
      if (!renderer) {
        return <Text>Unsupported type: {type}</Text>;
      }

      return renderer(item);
    };

    const handleItemClick = (item) => {
      const { _id } = item;
      const buildPath = ROUTE_MAP[type];

      if (!buildPath) {
        console.warn(`No route configured for type: ${type}`);
        return;
      }
      const path = buildPath(_id);
      router.push(path);
  };

    return (
      <FlatList
        data={detailedData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
            onPress={() => handleItemClick(item)}
          >
        {displayContent(type, item)}
          </TouchableOpacity>
        )}
      />
  );
}
