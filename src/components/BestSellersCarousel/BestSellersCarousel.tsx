import { CATEGORY_LABELS, getBestSellers } from "@/lib/products";
import { Carousel } from "../Carousel/Carousel";
import { CardCarousel } from "./CardCarousel/CardCarousel";
import { ROUTES } from "@/app/routes";

export function BestSellersCarousel() {
  const products = getBestSellers();

  return (
    <section className="pt-[80px] pb-[40px] tablet:pb-[80px] desktop:pb-[60px]">
      <h2 className="container-layout font-bold text-[24px] tablet:text-[28px] desktop:text-[32px] mb-[32px] tablet:mb-[40px]">
        Best Sellers
      </h2>
      <Carousel
        ariaLabel="Best Sellers"
        slides={products.map((product) => (
          <CardCarousel
            key={product.id}
            category={CATEGORY_LABELS[product.category]}
            name={product.name}
            description={product.shortDescription}
            buttonLabel="Learn more"
            imageSrc={product.image}
            href={ROUTES.product(product.slug)}
          />
        ))}
      />
    </section>
  );
}
