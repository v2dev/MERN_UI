import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, ToastAndroid, View, Linking } from "react-native";
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
              title={item.name}
              starred={starred[item._id]}
              onPress={() => router.push(`/category/${item._id}`)}
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
