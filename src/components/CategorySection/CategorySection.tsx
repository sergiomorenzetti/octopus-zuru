import clsx from "clsx";
import { ROUTES } from "@/app/routes";
import { Heading } from "@/components/Heading/Heading";
import {
  ProductCard,
  type ProductCardVariant,
} from "@/components/ProductCard/ProductCard";
import type { Product } from "@/lib/products";

/**
 * - featured-top: large card on a full row, other cards below (Kitchen)
 * - featured-side: large card on the left spanning two rows, other cards stacked on the right (Home Security)
 * - grid: equal cards in a row (Accessories)
 * On mobile every layout becomes a single column.
 */
export type CategorySectionLayout = "featured-top" | "featured-side" | "grid";

type CategorySectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  layout: CategorySectionLayout;
  /** In the "featured" layouts, the first product with a featureImage is the large card */
  products: Product[];
};

const GRID_LAYOUT_CLASS_MAP = {
  "featured-top": "tablet:grid-cols-2",
  "featured-side": "tablet:grid-cols-2 desktop:grid-rows-2",
  grid: "tablet:grid-cols-3",
} as const satisfies Record<CategorySectionLayout, string>;

// Ratios follow the feature images exported from Figma (mobile 804x1072, tablet 1620x648, desktop 3200x1106)
const FEATURED_CARD_CLASS_MAP = {
  "featured-top":
    "tablet:col-span-2 aspect-[804/1072] tablet:aspect-[1620/648] desktop:aspect-[3200/1106]",
  "featured-side":
    "tablet:col-span-2 desktop:col-span-1 desktop:row-span-2 aspect-[804/1072] tablet:aspect-[1620/648] desktop:aspect-auto",
  grid: "",
} as const satisfies Record<CategorySectionLayout, string>;

const CARD_VARIANTS_MAP = {
  "featured-top": { featured: "feature-left", other: "stack" },
  "featured-side": { featured: "feature-top", other: "split" },
  grid: { featured: "media-top", other: "media-top" },
} as const satisfies Record<
  CategorySectionLayout,
  { featured: ProductCardVariant; other: ProductCardVariant }
>;

export function CategorySection({
  title,
  description,
  buttonLabel,
  layout,
  products,
}: CategorySectionProps) {
  const featured =
    layout === "grid"
      ? undefined
      : products.find((product) => product.featureImage);
  const others = products.filter((product) => product !== featured);

  return (
    <section className="container-layout py-[40px] tablet:py-[60px]">
      <Heading
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        variant="secondary"
      />

      <div
        className={clsx(
          "grid grid-cols-1 gap-[16px] mt-[32px] tablet:mt-[40px]",
          GRID_LAYOUT_CLASS_MAP[layout],
        )}
      >
        {featured && (
          <ProductCard
            name={featured.name}
            description={featured.shortDescription}
            imageSrc={featured.image}
            featureImage={featured.featureImage}
            href={ROUTES.product(featured.slug)}
            buttonLabel="Learn more"
            variant={CARD_VARIANTS_MAP[layout].featured}
            className={FEATURED_CARD_CLASS_MAP[layout]}
          />
        )}
        {others.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.shortDescription}
            imageSrc={product.image}
            href={ROUTES.product(product.slug)}
            buttonLabel="Learn more"
            variant={CARD_VARIANTS_MAP[layout].other}
          />
        ))}
      </div>
    </section>
  );
}
