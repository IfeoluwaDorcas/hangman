import * as Haptics from 'expo-haptics';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const { width } = Dimensions.get("window");
const keySize = Math.floor(width / 10.5);

interface Props {
  onPress: (letter: string) => void;
  guessedLetters: string[];
  correctLetters: string[];
}

export default function Keyboard({ onPress, guessedLetters, correctLetters }: Props) {
  return (
    <View style={styles.container}>
      {LETTERS.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = correctLetters.includes(letter);

        let backgroundColor = "#c9e0f9";
        if (isGuessed && isCorrect) backgroundColor = "#39FF14";
        else if (isGuessed && !isCorrect) backgroundColor = "#FF4500";

        return (
          <TouchableOpacity
            key={letter}
            style={[styles.key, { backgroundColor }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onPress(letter);
            }}
            disabled={isGuessed}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  key: {
    width: keySize,
    height: keySize * 1.2,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  keyText: {
    fontSize: keySize * 0.5,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
