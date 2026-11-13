import clsx from "clsx";
import Image from "next/image";
import { ArtDirectedImage } from "@/components/atoms/ArtDirectedImage/ArtDirectedImage";
import { Button } from "@/components/atoms/Button/Button";
import type { ResponsiveImage } from "@/lib/products";

export type ProductCardVariant =
  | "feature-left"
  | "feature-top"
  | "stack"
  | "split"
  | "media-top";

export type ProductCardProps = {
  name: string;
  description: string;
  imageSrc: string;
  featureImage?: ResponsiveImage;
  href: string;
  buttonLabel: string;
  variant?: ProductCardVariant;
  className?: string;
};

const CARD_VARIANTS_CLASS_MAP = {
  "feature-left":
    "relative items-center text-center tablet:justify-center tablet:items-start tablet:text-left",
  "feature-top": "relative items-center text-center",
  stack: "items-center text-center",
  split: "items-center text-center tablet:flex-row tablet:text-left",
  "media-top":
    "items-center text-center tablet:flex-col-reverse tablet:items-stretch tablet:text-left",
} as const satisfies Record<ProductCardVariant, string>;

const TEXT_VARIANTS_CLASS_MAP = {
  "feature-left": "tablet:max-w-1/2 tablet:items-start",
  "feature-top": "",
  stack: "",
  split: "tablet:w-1/2 tablet:items-start",
  "media-top": "tablet:items-start",
} as const satisfies Record<ProductCardVariant, string>;

const IMAGE_VARIANTS_CLASS_MAP = {
  "feature-left": "absolute inset-0",
  "feature-top": "absolute inset-0",
  stack: "relative w-full aspect-square",
  split: "relative w-full aspect-square tablet:w-1/2",
  "media-top": "relative w-full aspect-square",
} as const satisfies Record<ProductCardVariant, string>;

const isFeature = (variant: ProductCardVariant) =>
  variant === "feature-left" || variant === "feature-top";

export function ProductCard({
  name,
  description,
  imageSrc,
  featureImage,
  href,
  buttonLabel,
  variant = "stack",
  className,
}: ProductCardProps) {
  return (
    <article
      className={clsx(
        "flex flex-col overflow-hidden rounded-[28px] bg-card-background-primary",
        CARD_VARIANTS_CLASS_MAP[variant],
        className,
      )}
    >
      <div
        className={clsx(
          "relative z-10 flex flex-col items-center gap-y-[8px] p-[24px] tablet:p-[32px]",
          TEXT_VARIANTS_CLASS_MAP[variant],
        )}
      >
        <h3 className="font-bold text-[24px] tablet:text-[28px]">{name}</h3>
        <p className="font-[470] text-[16px] tablet:text-[18px] text-text-secondary">
          {description}
        </p>
        <Button
          label={buttonLabel}
          variant="primary"
          href={href}
          className="mt-[16px]"
          ariaLabel={buttonLabel}
        />
      </div>

      <div className={IMAGE_VARIANTS_CLASS_MAP[variant]}>
        {isFeature(variant) && featureImage ? (
          <ArtDirectedImage image={featureImage} alt={name} />
        ) : (
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(min-width: 1200px) 50vw, 100vw"
            className={isFeature(variant) ? "object-cover" : "object-contain"}
          />
        )}
      </div>
    </article>
  );
}
