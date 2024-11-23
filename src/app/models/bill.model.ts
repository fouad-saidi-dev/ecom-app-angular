import {Customer} from "./customer.model";

export interface Bill{
  id: number;
  billingDate: Date;
  productItem:ProductItem[];
  customer:Customer;
}

export interface ProductItem{
  id:number;
  productId: string;
  quantity: number;
  price: number;
}
