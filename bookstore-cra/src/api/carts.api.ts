import { getToken } from "../store/authStore";
import { httpClient } from "./http";

interface AddCartParams {
  isbn: string;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  if (!getToken()) {
    console.log("왜 토큰을 못 가져오냐");
    return;
  }
  const response = await httpClient.post("/carts", params);
  return response.data;
};
