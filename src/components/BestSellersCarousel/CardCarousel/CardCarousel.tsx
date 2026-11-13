import { ROUTES } from "@/app/routes";
import { Button } from "@/components/atoms/Button/Button";
import Image from "next/image";

export type CardCarouselProps = {
  category: string;
  name: string;
  description: string;
  buttonLabel: string;
  imageSrc: string;
  href: string;
};

export function CardCarousel({
  category,
  name,
  description,
  buttonLabel,
  imageSrc,
  href,
}: CardCarouselProps) {
  return (
    <div className="flex flex-col tablet:flex-row w-[320px] h-[512px] tablet:w-[746px] tablet:h-[413px] desktop:w-[1048px] desktop:h-[589px] overflow-hidden rounded-[28px] bg-card-background-primary">
      <div className="flex flex-col justify-center items-start gap-y-[8px] pt-[32px] px-[24px] tablet:w-1/2 tablet:p-[32px] desktop:p-[48px]">
        <h5 className="text-text-accent font-[470] text-[18px]">{category}</h5>
        <h4 className="font-bold text-[24px] desktop:text-[32px] tablet:text-[28px]">
          {name}
        </h4>
        <p className="font-[470] text-[18px] tablet:text-[20px] text-text-secondary">
          {description}
        </p>
        <Button
          label={buttonLabel}
          variant="primary"
          href={href}
          className="mt-[16px]"
        />
      </div>
      <div className="relative flex-1 tablet:flex-none tablet:w-1/2">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(min-width: 1200px) 524px, (min-width: 810px) 373px, 320px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
