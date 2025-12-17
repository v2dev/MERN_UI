import { Video } from "expo-av";
import { Stack } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, Image, Platform, Text, View } from "react-native";

export const ContactItem = ({ item }) => {
  const contact = item;
  const videoRefs = useRef({});
  const [activeVideoId, setActiveVideoId] = useState(null);

  const pauseAllExcept = async (id) => {
    for (const key in videoRefs.current) {
      if (key !== id && videoRefs.current[key]) {
        await videoRefs.current[key].pauseAsync();
      }
    }
  };

  const renderHeader = () => (
    <View style={{ paddingBottom: 30 }}>
      {/* HEADER BACKGROUND */}
      <View
        style={{
          height: 150,
          backgroundColor: "#4f46e5", // Indigo
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      />

      {/* PROFILE CARD */}
      <View
        style={{
          marginTop: -75,
          marginHorizontal: 20,
          marginBottom: 20,
          backgroundColor: "#fff",
          borderRadius: 22,
          paddingVertical: 22,
          alignItems: "center",

          // Shadow
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 8,
        }}
      >
        <Image
          source={
            contact.image
              ? { uri: contact.image }
              : require("@/assets/default_human.png")
          }
          style={{
            width: 92,
            height: 92,
            borderRadius: 46,
            marginBottom: 12,
          }}
        />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 6,
          }}
        >
          {contact.name}
        </Text>

        <View
          style={{
            backgroundColor: "#eef2ff",
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: "#4f46e5",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            {contact.email}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginTop: 28,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        About Me
      </Text>

      {/* ABOUT ME CARD */}
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: "#fff",
          borderRadius: 18,
          padding: 18,

          // Shadow
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 4,
        }}
      >
        <Text
          numberOfLines={5}
          style={{
            fontSize: 15,
            lineHeight: 22,
            color: "#444",
          }}
        >
          {contact.about ||
            "Passionate professional with experience in delivering high-quality work. Skilled in collaboration, problem-solving, and continuous learning. Always eager to take on new challenges and grow both personally and professionally."}
        </Text>
      </View>

      {/* SECTION TITLE */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginTop: 28,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        🎬 My Videos
      </Text>
    </View>
  );

  const renderVideo = ({ item }) => (
    <View
      style={{
        marginBottom: 25,
        marginHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
      }}
    >
      <Video
        ref={(ref) => (videoRefs.current[item.id] = ref)}
        source={{ uri: item.uri }}
        style={{
          width: "100%",
          height: 210,
          borderRadius: 12,
          backgroundColor: "#000",
        }}
        resizeMode="contain"
        useNativeControls
        shouldPlay={false}
        onPlaybackStatusUpdate={(status) => {
          if (status.isPlaying && activeVideoId !== item.id) {
            setActiveVideoId(item.id);
            pauseAllExcept(item.id);
          }
        }}
      />
    </View>
  );

  const listData = [
    { type: "header", id: "header" },
    ...contact.videos.map((v) => ({ ...v, type: "video" })),
  ];

  return (
    <>
      <Stack.Screen options={{ title: contact.name || "Details" }} />

      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.type === "header" ? renderHeader() : renderVideo({ item })
        }
        initialNumToRender={2}
        windowSize={5}
        removeClippedSubviews={Platform.OS === "android"}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </>
  );
};
