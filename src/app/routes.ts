export const ROUTES = {
  homepage: {
    route: "/",
    metadata: {
      title: "Homepage",
      description: "Welcome to the Octopus homepage",
    },
  },
  placeholder: {
    route: "/placeholder-route",
    metadata: {
      title: "Placeholder Page",
      description: "This is a placeholder page",
    },
  },
  product: (slug: string) => ({
    route: `/products/${slug}`,
    metadata: {
      title: `Product Page ${slug}`,
      description: "Details about the product",
    },
  }),
} as const;
