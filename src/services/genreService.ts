import ApiClient, { FetchResponse } from "./apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default new ApiClient<FetchResponse<Genre>>("/genres");
