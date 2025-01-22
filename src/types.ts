// Interfaz para cada producto dentro del array de `products`
interface Product {
  quantity: number;
  product: string; // ID del producto en formato string
  _id: string;
}

// Interfaz para cada elemento en el array `data`
export interface DataItem {
  _id: string;
  user: string; // ID del usuario en formato string
  products: Product[];
}

// Interfaz para la respuesta completa
export interface ApiResponse {
  data: DataItem[];
}

export type DecodedToken = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  exp: number; // Fecha de expiración del token
  iat: number; // Fecha de emisión del token
};
