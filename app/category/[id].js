import {
  fetchDataWithFavoriteOnTop,
  fetchDataWithSearch,
  toggleFavorite,
} from "@/api/commonApi";
import { RENDER_MAP } from "@/config/renderer";
import { ROUTE_MAP } from "@/config/routeMap";
import { formatType } from "@/Utils/formatType.js";
import { useCategoryDetailViewModel } from "@/viewmodels/useCategoryDetailViewModel";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar = React.memo(function SearchBar({
  value,
  onChange,
  onClear,
  placeholder,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
      }}
    >
      <MaterialIcons name="search" size={22} color="gray" />

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        autoCorrect={false}
        style={{
          flex: 1,
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
      />

      {value.length > 0 && (
        <Pressable onPress={onClear} hitSlop={10}>
          <MaterialIcons name="close" size={20} color="gray" />
        </Pressable>
      )}
    </View>
  );
});

/* 
    This component displays detailed data for a specific category.
    Users can view, star/unstar, edit, and delete items within the category.
*/

export default function CategoryDetailData() {
  const { id, type } = useLocalSearchParams();
  const router = useRouter();

  // Use local state for list to update items instantly
  const {
    detailedData: fetchedData,
    loading,
    error,
    reload,
  } = useCategoryDetailViewModel(id, type);

  const [detailedData, setDetailedData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);

  // Sync local state with fetched data
  useEffect(() => {
    setDetailedData(fetchedData);
  }, [fetchedData]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setDetailedData(fetchedData);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setSearching(true);
        console.log("Searching for:", searchQuery);
        const res = await fetchDataWithSearch(type + "s", searchQuery);
        setDetailedData(res?.lists || []);
      } catch (err) {
        console.error("Search failed", err);
      } finally {
        setSearching(false);
      }
    }, 400); // debounce delay

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Refresh on screen focus
  useFocusEffect(
    useCallback(() => {
      reload();
    }, [id, type])
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  // Render item using RENDER_MAP
  const displayContent = (type, item) => {
    const renderer = RENDER_MAP[type];
    if (!renderer) return <Text>Unsupported type: {type}</Text>;

    return renderer(
      item,
      () => handleStarToggle(item),
      () => handleEdit(item),
      () => handleDelete(item)
    );
  };

  /**
   * Clicks on an item to view details
   * @param {*} item
   * @returns
   */
  const handleItemClick = (item) => {
    const { _id } = item;
    const buildPath = ROUTE_MAP[type];
    if (!buildPath) return console.warn(`No route for type: ${type}`);
    router.push(buildPath(_id));
  };

  /**
   * Handle delete action for an item
   * @param {*} item
   */
  const handleDelete = (item) => {
    router.push({ pathname: `/delete/${item._id}`, params: { type } });
  };

  /**
   * Handle edit action for an item
   * @param {*} item
   */
  const handleEdit = (item) => {
    router.push(`/screens/item/${item._id}?type=${type}`);
  };

  /**
   * Handle star toggle action
   * @param {*} item
   */
  const handleStarToggle = async (item) => {
    // Update local state instantly
    console.log("Toggling favorite for item:", item);
    setDetailedData((prev) =>
      prev.map((d) =>
        d._id === item._id ? { ...d, favorite: !d.favorite } : d
      )
    );

    // Call backend API
    try {
      await toggleFavorite(item._id, type + "s");
    } catch (err) {
      console.error("Toggle favorite failed:", err);
      // Revert UI if API fails
      setDetailedData((prev) =>
        prev.map((d) =>
          d._id === item._id ? { ...d, favorite: item.favorite } : d
        )
      );
    }
  };

  const renderEmptyState = () => (
    <View style={{ padding: 40, alignItems: "center" }}>
      <Text style={{ color: "gray", fontSize: 16 }}>
        {searchQuery ? "No matching results found" : "No data available"}
      </Text>
    </View>
  );

  /**
   * Handle toggle switch to fetch data with favorites on top
   */
  const handleToggle = async () => {
    // compute the NEXT value manually
    const nextToggle = !isToggled;

    // update UI instantly
    setIsToggled(nextToggle);

    try {
      // send the NEW toggle value
      const fetchedData = await fetchDataWithFavoriteOnTop(
        type + "s",
        nextToggle
      );
      setDetailedData(fetchedData.lists);
    } catch (err) {
      console.error("Toggle failed:", err);
      setIsToggled(isToggled);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, marginLeft: -25 }}>
              {formatType(type)}
            </Text>
          ),

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              {/* Add Button */}
              <Pressable
                onPress={() => router.push(`screens/item/new?type=${type}`)}
                android_ripple={{
                  color: "#d0d0d0",
                  borderless: true,
                  radius: 20,
                }}
                style={{ padding: 6, marginHorizontal: 4 }}
              >
                <MaterialIcons
                  name="add-circle-outline"
                  size={28}
                  color="black"
                />
              </Pressable>

              {/* Toggle Button */}
              <Pressable
                onPress={handleToggle}
                android_ripple={{
                  color: "#d0d0d0",
                  borderless: true,
                  radius: 20,
                }}
                style={{ padding: 6, marginHorizontal: 4 }}
              >
                <MaterialIcons
                  name={isToggled ? "toggle-on" : "toggle-off"}
                  size={50}
                  color={isToggled ? "green" : "gray"}
                />
              </Pressable>
            </View>
          ),
        }}
      />

      <FlatList
        data={detailedData}
        keyExtractor={(item) => item._id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
            placeholder={`Search ${formatType(type)}...`}
          />
        }
        ListEmptyComponent={renderEmptyState}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: "#ccc",
              backgroundColor: "white",
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
