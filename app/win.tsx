import { useGame } from "@/context/GameContext";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function WinScreen() {
  const router = useRouter();
  const { level, setLevel } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You Survived Level {level}!</Text>

      <Image
        source={require("../assets/win.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLevel(level + 1);
          router.replace("/game");
        }}
      >
        <Text style={styles.buttonText}>Next Level</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5ffff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width * 0.075,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "monospace",
    color: "#2a7af9",
  },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4CAF50",
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
