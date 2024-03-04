import { httpClient } from "./http";

export const fetchCategory = async () => {
  const response = await httpClient.get<string[]>("/categories");
  return response.data;
};
