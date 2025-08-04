import { useGame } from "@/context/GameContext";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function LoseScreen() {
  const router = useRouter();
  const { level } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You Got Hung on Level {level}!</Text>

      <Image
        source={require("../assets/lose.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/game")}
      >
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8f8",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width * 0.065,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "monospace",
    color: "#e53935",
  },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#E53935",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "600",
    fontFamily: "monospace",
  },
});
