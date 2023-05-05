import ApiClient, { FetchResponse } from "./apiClient";
import { Platform } from "./platformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default new ApiClient<FetchResponse<Game>>("/games");
