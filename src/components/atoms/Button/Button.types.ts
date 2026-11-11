import { IconName } from "../Icon/Icon";

export type ButtonVariant = "primary" | "secondary" | "ghost-light";

type BaseButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

type TextButtonProps = BaseButtonProps & {
  label: string;
  iconName?: never;
  iconSize?: never;
};

type IconButtonProps = BaseButtonProps & {
  iconName: IconName;
  iconSize?: number;
  label?: never;
};

export type ButtonProps = TextButtonProps | IconButtonProps;
