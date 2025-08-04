import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function SplashScreenScreen() {
  const router = useRouter();
  const fullText = "H  a  n  g  m  a  n";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    const delay = fullText.length * 150 + 1000;
    const timeout = setTimeout(async () => {
      await SplashScreen.hideAsync();
      router.replace("/home");
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5ffff",
    }}>
      <Text style={{
        fontSize: 24,
        fontFamily: "monospace",
        marginBottom: 25,
        fontWeight: "bold"
      }}>
        S  C  R  I  P  T
      </Text>
      <Text style={{
        fontSize: 18,
        fontFamily: "monospace",
        color: "#2a7af9"
      }}>
        {displayedText}{cursorVisible ? " |" : " "}
      </Text>
    </View>
  );
}
