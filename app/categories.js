import ListItem from "@/components/ListItem";
import { commonStyles } from "@/styles/commonStyles";
import { useCategoriesViewModel } from "@/viewmodels/useCategoriesViewModel";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, ToastAndroid, View } from "react-native";

/* 
    This component displays a list of categories.
    Users can star/unstar categories and navigate to different screens based on category type.
*/

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

  /**
   * Handle item press based on category type
   * @param {*} item
   */
  const handleItemPress = (item) => {
    const { type, _id } = item;
    router.push({
      pathname: `/category/${_id}`,
      params: { type },
    });
  };

  return (
    <>
      <Stack.Screen options={{ title: "Categories" }} />
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
              title={`${item.name} `}
              starred={starred[item._id]}
              onPress={() => handleItemPress(item)}
              onStarToggle={() => toggleStar(item._id)}
            />
          )}
        />
      )}
    </>
  );
}
