export type UserType = {
  telegramId: number;
  username: string;
  position?: number;
  balance?: number;
};

export type MeType = {
  balance: number;
  gameAvailable: boolean;
  id: number;
  magicLink: string;
  rank: number;
  username: string;
  tickets: number;
};

export type UserStoreType = {
  me: MeType | null;
  setMe: (me: MeType | null) => void;
};
