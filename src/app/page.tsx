import { ROUTES } from "@/app/routes";
import { Banner } from "@/components/Banner/Banner";
import { BestSellersCarousel } from "@/components/BestSellersCarousel/BestSellersCarousel";
import { CategorySection } from "@/components/CategorySection/CategorySection";
import { Hero } from "@/components/Hero/Hero";
import { getProductsByCategory } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellersCarousel />
      <CategorySection
        title="Kitchen"
        description="Powerful appliances for everyday cooking"
        buttonLabel="Explore all products"
        layout="featured-top"
        products={getProductsByCategory("kitchen")}
      />
      <Banner
        title="Octopus Ionic Hair Dryer"
        description="Dry your hair faster and with less frizz with this powerful ionic hair dryer"
        buttonLabel="Learn more"
        href={ROUTES.placeholder}
        image={{
          mobile: "/Category=Hair Care, Breakpoint=_ 810 px.png",
          tablet: "/Category=Hair Care, Breakpoint=1199 - 810 px.png",
          desktop: "/Breakpoint=Desktop.png",
        }}
        imageAlt="Woman drying her hair with the Octopus Ionic Hair Dryer"
      />
      <CategorySection
        title="Home Security"
        description="Home feels safer when you're always in the loop"
        buttonLabel="Explore all products"
        layout="featured-side"
        products={getProductsByCategory("home-security")}
      />
      <CategorySection
        title="Accessories"
        description="The little things that make everything work better"
        buttonLabel="Explore all products"
        layout="grid"
        products={getProductsByCategory("accessories")}
      />
      <Banner
        title="Find us at The Warehouse"
        buttonLabel="Find your nearest store"
        href={ROUTES.placeholder}
        image={{
          mobile: "/765697dbce7e5894140bd537cf5629451271cb53.png",
          tablet: "/Breakpoint=Tablet.png",
          desktop: "/49bd8e22e90232affb0c405a7b5a405e4a6d8c5e.png",
        }}
        imageAlt="Octopus kettle, blender and air fryer on a red background"
        theme="dark"
      />
    </>
  );
}
