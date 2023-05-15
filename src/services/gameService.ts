import { Game } from "../entities/Game";
import ApiClient, { FetchResponse } from "./apiClient";

export default new ApiClient<FetchResponse<Game>>("/games");
