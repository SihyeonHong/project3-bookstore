export interface Order {
  id: number;
  main_title: string;
  total_quantity: number;
  total_price: number;
  created_at: string;
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderSheet {
  items: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: Delivery;
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderDetail {
  isbn: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface OrderListItem extends Order {
  detail?: OrderDetail[];
}
