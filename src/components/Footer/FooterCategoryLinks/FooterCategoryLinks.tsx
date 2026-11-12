import { Button } from "@/components/atoms/Button/Button";

type FooterCategoryLink = {
  label: string;
  href: string;
};

export type FooterCategoryLinksProps = {
  title: string;
  links: FooterCategoryLink[];
};

export function FooterCategoryLinks({
  title,
  links,
}: FooterCategoryLinksProps) {
  return (
    <div className="flex flex-col gap-y-[40px] tablet:gap-y-[32px]">
      <h3 className="text-[16px] font-bold">{title}</h3>
      <div className="flex flex-col gap-y-[24px] tablet:grid tablet:grid-flow-col tablet:grid-rows-[repeat(2,auto)] tablet:auto-cols-[minmax(123px,max-content)] tablet:gap-x-[24px]">
        {links.map((link) => (
          <Button
            key={link.label}
            href={link.href}
            label={link.label}
            variant="ghost-dark"
            className="justify-start h-[12px]"
            noPadding
          />
        ))}
      </div>
    </div>
  );
}
