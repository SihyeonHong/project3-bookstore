import { Cart } from "../models/Cart.model";
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

export const fetchCart = async () => {
  if (!getToken()) {
    console.log("왜 토큰을 못 가져오냐");
    return [];
  }
  const response = await httpClient.get<Cart[]>("/carts");
  return response.data;
};

export const deleteCart = async (cartId: number) => {
  const response = await httpClient.delete(`/carts/${cartId}`);
  return response.data;
};
