import { ICONS } from "./Icon.data";

export type IconName = keyof typeof ICONS;

export type IconProps = {
  name: IconName;
  size?: number;
  ariaLabel?: string;
  className?: string;
};

export function Icon({ name, size = 24, className, ariaLabel }: IconProps) {
  const IconComponent = ICONS[name];
  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      {...(ariaLabel
        ? { role: "img", "aria-label": ariaLabel }
        : { "aria-hidden": true, focusable: false })}
    />
  );
}
