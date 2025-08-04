import { GameProvider } from "@/context/GameContext";
import {
  PatrickHand_400Regular,
  useFonts,
} from "@expo-google-fonts/patrick-hand";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    PatrickHand_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GameProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GameProvider>
  );
}
