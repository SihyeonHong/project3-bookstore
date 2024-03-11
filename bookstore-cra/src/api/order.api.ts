import { Order, OrderDetail, OrderSheet } from "../models/Order.model";
import { httpClient, requestHandler } from "./http";

// export const order = async (orderData: OrderSheet) => {
//   const response = await httpClient.post("/orders", orderData);
//   return response.data;
// };
export const order = async (orderData: OrderSheet) => {
  return await requestHandler("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  const response = await httpClient.get<Order[]>("/orders");
  return response.data;
};

export const fetchOrderDetail = async (orderId: number) => {
  const response = await httpClient.get<OrderDetail[]>(`/orders/${orderId}`);
  return response.data;
};
