import Link from "next/link";
import { ROUTES } from "@/app/routes";
import Image from "next/image";
import { HeaderLinks } from "../HeaderLinks/HeaderLinks";

export function HeaderContentDesktop() {
  return (
    <div className=" max-tablet:hidden flex flex-row items-center justify-between">
      <Link
        href={ROUTES.homepage}
        className="relative h-[40px] w-[108px] outline-focus-stroke focus-visible:outline-[2px] focus-visible:outline-offset-[2px] rounded-[28px]"
        aria-label="Homepage"
      >
        <Image
          src={"/logo-large-red.svg"}
          alt={"Header logo"}
          fill
          className="object-contain"
          priority
        />
      </Link>
      <div className="flex flex-row items-center tablet:gap-x-[4px] desktop:gap-x-[8px]">
        <HeaderLinks />
      </div>
    </div>
  );
}
