import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useGame } from "../context/GameContext";

export default function HomeScreen() {
  const router = useRouter();
  const { level } = useGame();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
    >
      <Text style={styles.title}>H A N _ M A N</Text>
      <View style={styles.container}>
        <Image
          source={require("../assets/hangman.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/game")}
        >
          <Text style={styles.buttonText}>Play Game</Text>
        </TouchableOpacity>

        <View style={styles.level}>
          <Text style={styles.levelText}>Level {level}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    fontFamily: "monospace",
    marginTop: 170,
    marginBottom: 50,
    color: "#2a7af9",
  },
  image: {
    width: 320,
    height: 270,
    marginBottom: 60,
  },
  button: {
    backgroundColor: "#2a7af9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "PatrickHand_400Regular",
  },
  level: {
    backgroundColor: "#124aa3ff",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  levelText: {
    marginTop: -4,
    fontSize: 18,
    color: "#fff",
    fontFamily: "PatrickHand_400Regular",
  },
});
