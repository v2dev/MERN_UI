import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, ToastAndroid, View } from "react-native";
import ListItem from "../src/components/ListItem";
import { commonStyles } from "../src/styles/commonStyles";
import { useCategoriesViewModel } from "../src/viewmodels/useCategoriesViewModel";

export default function Categories() {
  const { categories, loading, error } = useCategoriesViewModel();
  const router = useRouter();

  const [starred, setStarred] = useState({});

  const toggleStar = (id) => {
    setStarred((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    ToastAndroid.show(
      !starred[id] ? "Category starred!" : "Category unstarred!",
      ToastAndroid.SHORT
    );
  };

  const routeMap = {
  contact: (id) => `/category/${id}`,
  Spritiual: (id) => `/books/${id}`,
  // Add more types here...
};

  const handleItemPress = (item) => {
  console.log("Item pressed:", item);
  const { type, _id } = item;

  // If type exists in routeMap, use it.
  if (routeMap[type]) {
    // console.log("Navigating to:", routeMap[type](_id));
    router.push(routeMap[type](_id));
    return;
  }

  // Fallback route for unknown types (recommended)
  // router.push(`/generic/${type}/${_id}`);
};

  return (
    <>
      <Stack.Screen options={{ title: "All Categories" }} />
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
     <FlatList
        data={categories}
        keyExtractor={(item) => item._id}
        style={commonStyles.screenBackground}
        ItemSeparatorComponent={() => <View style={commonStyles.divider} />}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.name} ${item.type}`}
            starred={starred[item._id]}
            onPress={() => handleItemPress(item)}
            onStarToggle={() => toggleStar(item._id)}
            onEdit={() => console.log("Edit", item._id)}
            onFav={() => console.log("Fav", item._id)}
          />
        )}
      />
      )}
    </>
  );
}
