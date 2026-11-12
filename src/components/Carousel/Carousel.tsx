"use client";

import { useCallback, useEffect, useReducer, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { Button } from "@/components/atoms/Button/Button";

type CarouselProps = {
  slides: ReactNode[];
  ariaLabel?: string;
  className?: string;
};

export function Carousel({
  slides,
  ariaLabel = "Carousel",
  className,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  // Force re-render when the carousel moves so the arrows reflect the current position
  const [, rerender] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", rerender).on("reInit", rerender);

    return () => {
      emblaApi.off("select", rerender).off("reInit", rerender);
    };
  }, [emblaApi]);

  const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
  const canScrollNext = emblaApi?.canScrollNext() ?? false;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className={clsx(
        "flex flex-col gap-y-[32px] tablet:gap-y-[40px]",
        className,
      )}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        ref={emblaRef}
        className="overflow-hidden px-[16px] tablet:px-[32px] desktop:px-[max(48px,calc((100%-1440px)/2+48px))]"
      >
        <div className="flex gap-x-[16px] desktop:gap-x-[24px] touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none"
              role="group"
              aria-roledescription="slide"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-x-[8px] container-layout">
        <Button
          iconName="chevron-right"
          variant="secondary"
          className="rotate-180"
          ariaLabel="Previous slide"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        />
        <Button
          iconName="chevron-right"
          variant="secondary"
          ariaLabel="Next slide"
          disabled={!canScrollNext}
          onClick={scrollNext}
        />
      </div>
    </section>
  );
}
