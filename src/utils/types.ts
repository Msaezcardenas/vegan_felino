export interface ProductsResponse {
  data: Product[];
}

export interface SingleProductsResponse {
  message: string;
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
  image: string;
  totalPrice: number;
  unitType: string;
  __v: number;
}

export type CartItem = {
  title: string;
  price: number;
  productID: string;
  amount: number;
  description: string;
  totalPriceItem: number;
  image: string;
};

export type CartState = {
  cartItems: CartItem[];
  cartTotal: number;
  orderTotal: number;
  numItemsInCart: number;
  statusTab: boolean;
  totalCart: number;
};

export type SingleProductResponse = {
  data: Product;
};
