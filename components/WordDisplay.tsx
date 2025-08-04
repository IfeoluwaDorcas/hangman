import { StyleSheet, Text, View } from "react-native";

interface Props {
  word: string;
  guessedLetters: string[];
}


export default function WordDisplay({ word, guessedLetters }: Props) {
  return (
    <View style={styles.container}>
      
      {word.split("").map((letter, index) => (
        <Text key={index} style={styles.letter}>
          {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : "_"}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 20,
  },
  letter: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "monospace",
    width: 30,
    textAlign: "center",
  },
});
