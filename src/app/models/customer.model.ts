export interface Customer {
  id: number;
  name: string;
  email: string;
}
export interface RestCustomer {
  _embedded: {
    customers: Customer[];
  };
}
