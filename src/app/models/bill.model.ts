export interface Bill{
  id: number;
  billingDate: Date;
  productItem:ProductItem[];
}

export interface ProductItem{
  id:number;
  productId: string;
  quantity: number;
  price: number;
}
