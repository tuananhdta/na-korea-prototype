export interface Product {
  id: string;
  title: string;
  url: string;
  price: string;
  originalPrice?: string | null;
  categories: string[];
  image: string;
  originalImageUrl?: string;
  sku?: string | null;
  shortDescription: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}
