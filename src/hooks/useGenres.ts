import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import genreService from "../services/genreService";
import ms from "ms";

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: {
      count: genres.length,
      results: genres,
      next: null,
      previous: null,
    },
  });

export default useGenres;
