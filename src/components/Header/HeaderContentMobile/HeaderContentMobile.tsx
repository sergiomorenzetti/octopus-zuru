"use client";
import { Button } from "@/components/atoms/Button/Button";
import { HeaderLinks } from "../HeaderLinks/HeaderLinks";
import { useState, useId, useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "@/app/routes";
import Image from "next/image";
import clsx from "clsx";

export function HeaderContentMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelId = useId();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="tablet:hidden flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <Link
          href={ROUTES.homepage}
          className="relative h-[43px] w-[43px] outline-focus-stroke focus-visible:outline-[2px] focus-visible:outline-offset-[2px] rounded-[28px]"
          aria-label="Homepage logo"
          onClick={closeMenu}
        >
          <Image
            src={"/logo-red.svg"}
            alt={"Logo"}
            fill
            className="object-contain"
            priority
          />
        </Link>
        <Button
          iconName={isMenuOpen ? "x-close" : "menu"}
          onClick={handleMenuToggle}
          variant="ghost-light"
          ariaLabel={isMenuOpen ? "Close menu" : "Open menu"}
          ariaExpanded={isMenuOpen}
          ariaControls={panelId}
        />
      </div>
      <div
        id={panelId}
        inert={!isMenuOpen}
        className={clsx(
          "grid transition-[grid-template-rows] duration-200 ease-in-out",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col w-full gap-y-[8px] mt-[16px]">
            <HeaderLinks onClick={closeMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}
