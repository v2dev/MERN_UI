import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

const imagePath = require("@/assets/splash.jpeg");

/**
 * Splash Screen Component
 * @returns 
 */
export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    
  return (
    <View style={styles.container}>
      <Image
        source={imagePath}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

