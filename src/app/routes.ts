export const ROUTES = {
  homepage: "/",
  placeholder: "/placeholder-route",
  product: (slug: string) => `/products/${slug}`,
} as const;
