import ApiClient, { FetchResponse } from "./apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new ApiClient<FetchResponse<Platform>>(
  "/platforms/lists/parents"
);
