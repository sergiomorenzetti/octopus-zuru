import Image from "next/image";
import { Button } from "@/components/atoms/Button/Button";
import { ROUTES } from "@/app/routes";
import {
  FooterCategoryLinks,
  type FooterCategoryLinksProps,
} from "./FooterCategoryLinks/FooterCategoryLinks";

const FOOTER_CATEGORIES: FooterCategoryLinksProps[] = [
  {
    title: "Our Products",
    links: [
      { label: "Kitchen", href: ROUTES.placeholder },
      { label: "Home Security", href: ROUTES.placeholder },
      { label: "Hair Care", href: ROUTES.placeholder },
      { label: "Accessories", href: ROUTES.placeholder },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Where to buy", href: ROUTES.placeholder },
      { label: "Contact us", href: ROUTES.placeholder },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto text-white-primary bg-footer-background pb-[24px] pt-[48px] desktop:pt-[60px]">
      <div className="container-layout flex flex-col">
        <div className="flex flex-col tablet:flex-row tablet:justify-between">
          <div className="relative h-[100px] w-[100px]">
            <Image
              src={"/logo-small-white.svg"}
              alt={"Footer logo"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col max-tablet:my-[48px] max-tablet:gap-y-[48px] tablet:flex-row tablet:gap-x-[60px]">
            {FOOTER_CATEGORIES.map((category) => (
              <FooterCategoryLinks
                key={category.title}
                title={category.title}
                links={category.links}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-center tablet:mt-[48px] desktop:mt-[60px]">
          <p className="text-[14px] font-medium">
            Copyright 2026 Octopus - All rights reserved
          </p>
          <Button
            variant="ghost-dark"
            label="Policies & Terms"
            href={ROUTES.placeholder}
            textSize="text-[14px]"
            className="max-tablet:w-fit"
          />
        </div>
      </div>
    </footer>
  );
}
