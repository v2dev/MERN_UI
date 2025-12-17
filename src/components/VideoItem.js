// components/VideoItem.js
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";

export const VideoItem = ({ video, isActive }) => {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    if (isActive) {
      ref.current?.playAsync();
    } else {
      ref.current?.pauseAsync();
      setShowPoster(true);
    }
  }, [isActive]);

  return (
    <View style={{ marginBottom: 25, paddingHorizontal: 20 }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setShowPoster(false)}
      >
        <Video
          ref={ref}
          source={{ uri: video.uri }}
          style={{
            width: "100%",
            height: 220,
            borderRadius: 12,
            backgroundColor: "#000",
          }}
          resizeMode="cover"
          isMuted={muted}
          shouldPlay={false}
          useNativeControls={false}
          posterSource={{ uri: video.thumbnail }}
          usePoster={showPoster}
        />
      </TouchableOpacity>

      {/* MUTE BUTTON */}
      <TouchableOpacity
        onPress={() => setMuted(!muted)}
        style={{
          position: "absolute",
          bottom: 15,
          right: 30,
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: 8,
          borderRadius: 20,
        }}
      >
        <Ionicons
          name={muted ? "volume-mute" : "volume-high"}
          size={20}
          color="#fff"
        />
      </TouchableOpacity>

      {/* PLAY OVERLAY */}
      {showPoster && (
        <Ionicons
          name="play-circle"
          size={64}
          color="white"
          style={{
            position: "absolute",
            top: "40%",
            left: "42%",
          }}
        />
      )}
    </View>
  );
};
