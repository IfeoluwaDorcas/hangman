import { Image, StyleSheet, View } from "react-native";

interface Props {
  wrongGuesses: number;
}

export default function HangmanFigure({ wrongGuesses }: Props) {
  const stageImages = [
    require("../assets/stage0.png"),
    require("../assets/stage1.png"),
    require("../assets/stage2.png"),
    require("../assets/stage3.png"),
    require("../assets/stage4.png"),
    require("../assets/stage5.png"),
    require("../assets/stage6.png"),
  ];

  return (
    <View style={styles.container}>
      <Image source={stageImages[wrongGuesses]} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 250,
  },
});
