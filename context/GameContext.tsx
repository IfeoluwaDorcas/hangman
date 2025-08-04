import { createContext, ReactNode, useContext, useState } from "react";

interface GameContextType {
  level: number;
  setLevel: (level: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [level, setLevel] = useState(1);
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
