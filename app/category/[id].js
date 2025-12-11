import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { RENDER_MAP } from "../../src/config/renderer";
import { ROUTE_MAP } from "../../src/config/routeMap";
import { useCategoryDetailViewModel } from "../../src/viewmodels/useCategoryDetailViewModel";

/**
 * This component displays detailed data for a specific category based on its type.
 */

export default function CategoryDetailData() {
  const { id, type } = useLocalSearchParams();
  const router = useRouter();

  const { detailedData, loading, error, reload } = useCategoryDetailViewModel(
    id,
    type
  );

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [id, type])
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!detailedData || detailedData.length === 0)
    return <Text>No data found</Text>;

  const displayContent = (type, item) => {
    const renderer = RENDER_MAP[type];

    if (!renderer) return <Text>Unsupported type 111: {type}</Text>;

    return renderer(
      item,
      () => handleEdit(item),
      () => handleDelete(item)
    );
  };

  const handleItemClick = (item) => {
    const { _id } = item;
    console.log("category - [id].js :: handleItemClick :: item", item);
    console.log("category - [id].js :: handleItemClick :: id", _id);

    const buildPath = ROUTE_MAP[type];

    if (!buildPath) {
      console.warn(`No route configured for type: ${type}`);
      return;
    }
    const path = buildPath(_id);
    console.log("category - [id].js :: handleItemClick :: path", path);
    router.push(path);
  };

  const handleDelete = (item) => {
    router.push({
      pathname: `/delete/${item._id}`,
      params: { type },
    });
  };

  const handleEdit = (item) => {
    console.log("handle edit called");
    router.push(`/screens/item/${item._id}?type=${type}`);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: type,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push(`screens/item/new?type=${type}`)}
            >
              <MaterialIcons
                name="add-circle-outline"
                size={26}
                color="black"
              />
            </TouchableOpacity>
          ),
        }}
      />

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
    </>
  );
}
