import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  orderBy?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrderBy: (orderBy: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setOrderBy: (orderBy: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, orderBy } })),
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
