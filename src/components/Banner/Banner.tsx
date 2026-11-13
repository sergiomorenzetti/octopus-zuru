import clsx from "clsx";
import Image from "next/image";
import { ArtDirectedImage } from "@/components/atoms/ArtDirectedImage/ArtDirectedImage";
import { Button } from "@/components/atoms/Button/Button";
import type { ResponsiveImage } from "@/lib/products";

/**
 * - light: dark texts and primary button, for light backgrounds (Banner_Product)
 * - dark: white texts and white button, for dark backgrounds (Banner_StoreLocator)
 */
type BannerTheme = "light" | "dark";

type BannerProps = {
  title: string;
  description?: string;
  /** Logo shown below the title (e.g. the retailer logo of the store locator) */
  logo?: { src: string; alt: string; width: number; height: number };
  buttonLabel: string;
  href: string;
  image: ResponsiveImage;
  imageAlt: string;
  theme?: BannerTheme;
};

const TEXT_THEME_CLASS_MAP = {
  light: "text-secondary",
  dark: "text-white-primary",
} as const satisfies Record<BannerTheme, string>;

const BUTTON_THEME_MAP = {
  light: "primary",
  dark: "secondary",
} as const satisfies Record<BannerTheme, "primary" | "secondary">;

export function Banner({
  title,
  description,
  logo,
  buttonLabel,
  href,
  image,
  imageAlt,
  theme = "light",
}: BannerProps) {
  return (
    // Ratios follow the banner images exported from Figma (mobile 804x1072, tablet 1620x648, desktop 1200x500)
    <section className="relative w-full overflow-hidden aspect-[804/1072] tablet:aspect-[1620/648] desktop:aspect-[1200/500]">
      <ArtDirectedImage image={image} alt={imageAlt} />

      {/* Mobile: texts on top, centered. Tablet and desktop: on the left, vertically centered */}
      <div className="container-layout relative z-10 flex h-full flex-col items-center pt-[48px] text-center tablet:justify-center tablet:items-start tablet:pt-0 tablet:text-left">
        <div
          className={clsx(
            "flex flex-col items-center gap-y-[8px] tablet:max-w-1/2 tablet:items-start",
            TEXT_THEME_CLASS_MAP[theme],
          )}
        >
          <h2 className="font-bold text-[28px] tablet:text-[40px] desktop:text-[48px]">
            {title}
          </h2>
          {logo && (
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          )}
          {description && (
            <p className="font-[470] text-[16px] tablet:text-[18px] desktop:text-[20px]">
              {description}
            </p>
          )}
          <Button
            label={buttonLabel}
            variant={BUTTON_THEME_MAP[theme]}
            href={href}
            className="mt-[16px]"
          />
        </div>
      </div>
    </section>
  );
}
