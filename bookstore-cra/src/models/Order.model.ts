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
