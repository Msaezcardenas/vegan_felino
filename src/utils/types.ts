export type ProductsResponse = {
  data: Product[];
};

export type Product = {
  id: number;
  description: string;
  price: string;
  title: string;
};
