export interface ProductsResponse {
  data: Product[];
}

export interface Product {
  _id: string;
  category: string;
  code: string;
  description: string;
  price: number;
  title: string;
  status: boolean;
  stock: number;
  __v: number;
}

export type CartItem = {
  title: string;
  price: number;
  productID: string;
  amount: number;
};

export type CartState = {
  cartItems: CartItem[];
  cartTotal: number;
  orderTotal: number;
  numItemsInCart: number;
  statusTab: boolean;
};

export type SingleProductResponse = {
  data: Product;
};
