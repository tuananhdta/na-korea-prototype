export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  image?: string | null;
}

export interface Product {
  id: string;
  goodsNo?: string;
  slug?: string;
  title: string;
  url?: string;
  price: string;
  originalPrice?: string | null;
  categories: string[];
  image: string;
  originalImageUrl?: string;
  galleryImages?: string[];
  sku?: string | null;
  shortDescription: string;
  description: string;
  reviews?: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}
