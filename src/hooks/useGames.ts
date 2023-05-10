import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import { FetchResponse } from "../services/apiClient";
import gameService, { Game } from "../services/gameService";
import useGameQueryStore from "../store";

const useGames = () => {
  const gameQuery = useGameQueryStore((g) => g.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: gameQuery ? [CACHE_KEY_GAMES[0], gameQuery] : CACHE_KEY_GAMES,
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.orderBy,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
