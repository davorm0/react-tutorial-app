import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import platformService from "../services/platformService";

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: {
      count: platforms.length,
      results: platforms,
      next: null,
      previous: null,
    },
  });

export default usePlatforms;
