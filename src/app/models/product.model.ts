export interface Product {
  "id": string;
  "name": string;
  "price": number;
  "quantity": number;
}

export interface RestProduct{
  _embedded: {
    products: Product[];
  };
}
