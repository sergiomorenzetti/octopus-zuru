import clsx from "clsx";
import { Button } from "@/components/atoms/Button/Button";

type HeadingVariant = "primary" | "secondary";

export type HeadingProps = {
  title: string;
  description: string;
  buttonLabel: string;
  variant?: HeadingVariant;
};

const TITLE_VARIANT_CLASS_MAP = {
  primary: "text-[40px] tablet:text-[48px] desktop:text-[60px]",
  secondary: "text-[32px] tablet:text-[44px]",
} as const satisfies Record<HeadingVariant, string>;

const DESCRIPTION_SPACING_CLASS_MAP = {
  primary: "mt-[8px] mb-[24px] tablet:mb-[32px] desktop:mt-[12px]",
  secondary: "mt-[8px] mb-[32px]",
} as const satisfies Record<HeadingVariant, string>;

export function Heading({
  title,
  description,
  buttonLabel,
  variant = "primary",
}: HeadingProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className={clsx("font-bold", TITLE_VARIANT_CLASS_MAP[variant])}>
        {title}
      </h2>
      <p
        className={clsx(
          "font-[470] text-[18px] tablet:text-[20px] desktop:text-[24px]",
          DESCRIPTION_SPACING_CLASS_MAP[variant],
        )}
      >
        {description}
      </p>
      <Button label={buttonLabel} variant={variant} className="w-fit" />
    </div>
  );
}
