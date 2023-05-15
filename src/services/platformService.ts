import { Platform } from "../entities/Platform";
import ApiClient, { FetchResponse } from "./apiClient";

export default new ApiClient<FetchResponse<Platform>>(
  "/platforms/lists/parents"
);
