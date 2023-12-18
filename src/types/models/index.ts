export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface ICartProduct extends IProduct {
  count: number;
  status: 'pending' | 'process' | 'paid';
}

export interface ICustomer {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export interface IItemDetail {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IProductCheckout {
  customer: ICustomer;
  products: IItemDetail[];
}
