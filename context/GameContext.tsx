import * as SecureStore from "expo-secure-store";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface GameContextType {
  level: number;
  setLevel: (level: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [level, setLevelState] = useState(1);

  const setLevel = (newLevel: number) => {
    setLevelState(newLevel);
    SecureStore.setItemAsync("game-level", newLevel.toString());
  };

  useEffect(() => {
    const loadLevel = async () => {
      const stored = await SecureStore.getItemAsync("game-level");
      if (stored) setLevelState(parseInt(stored));
    };
    loadLevel();
  }, []);

  return (
    <GameContext.Provider value={{ level, setLevel }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};
