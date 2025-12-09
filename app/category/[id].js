import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity } from "react-native";
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
      return type === "contact" ? (
        <>
          <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
        </>
      ) : (
        <>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.author}</Text>
        </>
      );
    };
  
    const handleItemClick = (item) => {
      const { _id } = item;
      console.log("handleItemClick :: Navigating to book ID:", _id);
      if (type === "contact") {
        router.push({
          pathname: `/contact/${_id}`,
        });
      }
        
      if (type === "Spritiual") {
        router.push({
          pathname: `/books/${_id}`,
        });
      }
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
