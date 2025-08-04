import HangmanFigure from "@/components/HangmanFigure";
import { useGame } from "@/context/GameContext";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import wordsData from "../assets/words.json";
import Keyboard from "../components/Keyboard";
import WordDisplay from "../components/WordDisplay";

const { width, height } = Dimensions.get("window");

export default function GameScreen() {
  const router = useRouter();
  const { level } = useGame();

  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    const nextWord = wordsData.words.find((item) => item.level === level);
    if (!nextWord) {
      alert("You've completed all levels!");
      return;
    }
    setWord(nextWord.word.toUpperCase());
    setHint(nextWord.hint);
  }, [level]);

  const handleLetterPress = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    const updatedGuesses = [...guessedLetters, letter];
    setGuessedLetters(updatedGuesses);

    if (!word.includes(letter)) {
      const nextWrong = wrongGuesses + 1;
      setWrongGuesses(nextWrong);
      if (nextWrong >= 6) router.replace("/lose");
    } else {
      const allCorrect = word
        .split("")
        .every((char) => updatedGuesses.includes(char));
      if (allCorrect) router.replace("/win");
    }
  };

  if (!word) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Level {level}</Text>

        <Text style={styles.subTitle}>Guess the word:</Text>
        <HangmanFigure wrongGuesses={wrongGuesses} />

        <WordDisplay word={word} guessedLetters={guessedLetters} />

        <Text style={styles.hint}>💡 Hint: {hint}</Text>

        <Text style={styles.counter}>Wrong guesses: {wrongGuesses} / 6</Text>

        <Keyboard
          onPress={handleLetterPress}
          guessedLetters={guessedLetters}
          correctLetters={word.split("")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: height * 0.08,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: width * 0.075,
    fontWeight: "bold",
    marginBottom: 30,
    fontFamily: "monospace",
    color: "#2a7af9",
  },
  subTitle: {
    fontSize: width * 0.045,
    marginBottom: 20,
  },
  hint: {
    fontSize: width * 0.04,
    marginTop: 20,
    fontStyle: "italic",
    color: "#555",
  },
  counter: {
    fontSize: width * 0.04,
    marginVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
