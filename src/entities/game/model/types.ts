export type GameStatusType = "idle" | "inGame" | "loading";

export type GameStoreType = {
  status: GameStatusType;
  magicNumber?: number;
  setMagicNumber: (magicNumber: number) => void;
  setGameStatus: (status: GameStatusType) => void;
};

export type PostStartGameResult = {
  magicNumber: number;
};

export type PostFinishGameParams = {
  userTime: number;
};

export type PostFinishGameResult = {
  reward: number;
};
