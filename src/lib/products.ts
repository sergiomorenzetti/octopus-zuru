import productsData from "@/mocks/products.json";

export type ProductCategory =
  | "kitchen"
  | "home-security"
  | "hair-care"
  | "accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  image: string;
  bestSeller: boolean;
  colours?: string[];
  specs?: { title: string; items: string[] }[];
};

const products = productsData as Product[];

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  kitchen: "Kitchen",
  "home-security": "Home Security",
  "hair-care": "Hair Care",
  accessories: "Accessories",
};

export function getBestSellers(): Product[] {
  return products.filter((product) => product.bestSeller);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}
