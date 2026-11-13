import clsx from "clsx";
import Image from "next/image";
import { ArtDirectedImage } from "@/components/atoms/ArtDirectedImage/ArtDirectedImage";
import { Button } from "@/components/atoms/Button/Button";
import type { ResponsiveImage } from "@/lib/products";

type BannerVariant = "light" | "dark";

type BannerProps = {
  title: string;
  description?: string;
  logo?: { src: string; alt: string; width: number; height: number };
  buttonLabel: string;
  href: string;
  image: ResponsiveImage;
  imageAlt: string;
  variant?: BannerVariant;
};

const TEXT_COLOR_VARIANTS_CLASS_MAP = {
  light: "text-text-primary",
  dark: "text-text-white-primary",
} as const satisfies Record<BannerVariant, string>;

const TITLE_VARIANTS_CLASS_MAP = {
  light: "font-bold text-[32px] tablet:text-[40px] desktop:text-[48px]",
  dark: "font-[470] text-[24px] tablet:text-[32px]",
} as const satisfies Record<BannerVariant, string>;

const TITLE_DESCRIPTION_CLASS_MAP = {
  light:
    "text-text-secondary font-[470] text-[18px] tablet:text-[20px] desktop:text-[24px]",
  dark: "font-[470] text-[18px] tablet:text-[20px] desktop:text-[24px]",
} as const satisfies Record<BannerVariant, string>;

const BUTTON_VARIANTS_MAP = {
  light: "primary",
  dark: "secondary",
} as const satisfies Record<BannerVariant, "primary" | "secondary">;

export function Banner({
  title,
  description,
  logo,
  buttonLabel,
  href,
  image,
  imageAlt,
  variant = "light",
}: BannerProps) {
  return (
    <section className="relative w-full h-[688px] tablet:h-[500px]">
      <ArtDirectedImage
        image={image}
        alt={imageAlt}
        className="object-cover tablet:object-left"
      />
      <div className="container-layout relative z-10 flex h-full flex-col items-center max-tablet:pt-[80px] text-center tablet:justify-center tablet:items-start tablet:text-left">
        <div
          className={clsx(
            "flex flex-col items-center gap-y-[8px] tablet:max-w-1/2 tablet:items-start",
            TEXT_COLOR_VARIANTS_CLASS_MAP[variant],
          )}
        >
          <h2 className={TITLE_VARIANTS_CLASS_MAP[variant]}>{title}</h2>
          {logo && (
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          )}
          {description && (
            <p className={TITLE_DESCRIPTION_CLASS_MAP[variant]}>
              {description}
            </p>
          )}
          <Button
            label={buttonLabel}
            variant={BUTTON_VARIANTS_MAP[variant]}
            href={href}
            className="mt-[16px]"
          />
        </div>
      </div>
    </section>
  );
}
