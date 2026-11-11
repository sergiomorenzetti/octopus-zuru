import clsx from "clsx";
import Link from "next/link";
import { Button as HUButton } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import type { ButtonVariant, ButtonProps } from "./Button.types";

const BUTTON_VARIANTS_CLASS_MAP = {
  primary:
    "bg-button-primary-background text-button-primary-text border-button-primary-stroke hover:bg-button-primary-background-hover hover:border-button-primary-stroke-hover active:bg-button-primary-background-pressed active:border-button-primary-stroke-pressed",
  secondary:
    "bg-button-special-background text-button-special-text border-button-special-stroke hover:bg-button-special-background-hover hover:border-button-special-stroke-hover active:bg-button-special-background-pressed active:border-button-special-stroke-pressed",
  "ghost-light":
    "text-button-ghost-text-light hover:text-button-ghost-text-light-hover border-transparent",
} as const satisfies Record<ButtonVariant, string>;

const DISABLED_BUTTON_VARIANTS_CLASS_MAP: Record<ButtonVariant, string> = {
  primary:
    "bg-button-primary-background-disabled text-button-primary-text-disabled border-button-primary-stroke-disabled",
  secondary:
    "bg-button-special-background-disabled text-button-special-text-disabled border-button-special-stroke-disabled",
  "ghost-light": "text-button-ghost-text-light-disabled border-transparent",
} as const satisfies Record<ButtonVariant, string>;

const BASE_BUTTON_CLASSES =
  "text-[16px] font-medium inline-flex items-center justify-center border rounded-[28px] outline-focus-stroke focus-visible:outline-[2px] focus-visible:outline-offset-[2px] transition-colors duration-200 ease-in-out" as const;

const ICON_ONLY_GHOST_CLASSES =
  "hover:bg-button-ghost-background-hover active:bg-button-ghost-background-pressed" as const;

export function Button({
  href,
  label,
  iconName,
  iconSize,
  variant = "primary",
  disabled,
  className,
  onClick,
  ariaLabel,
  ariaExpanded,
  ariaControls,
}: ButtonProps) {
  const buttonClasses = clsx(
    label ? "px-[16px] py-[7px]" : "p-[7px]",
    BASE_BUTTON_CLASSES,
    disabled
      ? ["cursor-not-allowed", DISABLED_BUTTON_VARIANTS_CLASS_MAP[variant]]
      : [
          "cursor-pointer",
          BUTTON_VARIANTS_CLASS_MAP[variant],
          !!iconName && variant === "ghost-light" && ICON_ONLY_GHOST_CLASSES,
        ],
    className,
  );

  const buttonContent = iconName ? (
    <Icon name={iconName} size={iconSize} />
  ) : (
    label
  );

  if (!href || disabled) {
    return (
      <HUButton
        className={buttonClasses}
        type="button"
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {buttonContent}
      </HUButton>
    );
  } else {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {buttonContent}
      </Link>
    );
  }
}
