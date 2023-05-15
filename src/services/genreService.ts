import { Genre } from "../entities/Genre";
import ApiClient, { FetchResponse } from "./apiClient";

export default new ApiClient<FetchResponse<Genre>>("/genres");
