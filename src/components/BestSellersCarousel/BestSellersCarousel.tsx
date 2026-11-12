import { Carousel } from "../Carousel/Carousel";
import {
  CardCarousel,
  type CardCarouselProps,
} from "./CardCarousel/CardCarousel";

const SLIDES: (CardCarouselProps & { id: string })[] = [
  {
    id: "smart-air-fryer",
    category: "Kitchen",
    name: "Octopus Air Fryer 5.7 L",
    description:
      "A 5.7 L air fryer that cooks meals quickly and evenly, with 2200W and dual heaters",
    buttonLabel: "Learn more",
    imageSrc: "/Frame 112-2.png",
  },
  {
    id: "indoor-camera",
    category: "Home Security",
    name: "Octopus Indoor Camera",
    description:
      "A 2K indoor camera that pans to cover the whole room and tracks movement as it happens",
    buttonLabel: "Learn more",
    imageSrc: "/Frame 112-4.png",
  },

  {
    id: "hair-dryer",
    category: "Hair Care",
    name: "Octopus Ionic Hair Dryer",
    description:
      "A powerful hair dryer with a 110,000 RPM motor for fast and efficient drying",
    buttonLabel: "Learn more",
    imageSrc: "/Frame 112-7.png",
  },
];

export function BestSellersCarousel() {
  return (
    <section className="pt-[80px] pb-[40px] tablet:pb-[80px] desktop:pb-[60px]">
      <h2 className="container-layout font-bold text-[24px] tablet:text-[28px] desktop:text-[32px] mb-[32px] tablet:mb-[40px]">
        Best Sellers
      </h2>
      <Carousel
        ariaLabel="Best Sellers"
        slides={SLIDES.map((slide) => (
          <CardCarousel key={slide.id} {...slide} />
        ))}
      />
    </section>
  );
}
