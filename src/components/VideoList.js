import { Video } from "expo-av";
import { FlatList, View } from "react-native";

export const VideoList = ({ videos }) => {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Video
        source={{ uri: item.uri }}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          backgroundColor: "#000",
        }}
        useNativeControls
        resizeMode="contain"
      />
    </View>
  );

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      scrollEnabled={false} // 👈 important
    />
  );
};
