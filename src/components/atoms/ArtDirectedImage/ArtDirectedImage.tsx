import { getImageProps } from "next/image";
import type { ResponsiveImage } from "@/lib/products";

type ArtDirectedImageProps = {
  image: ResponsiveImage;
  alt: string;
  className?: string;
};

/**
 * A different image for each breakpoint, filling its (relative) parent.
 * The browser downloads only the image of the current breakpoint.
 */
export function ArtDirectedImage({ image, alt, className }: ArtDirectedImageProps) {
  const common = { alt, fill: true, sizes: "100vw" };

  const { srcSet: desktop } = getImageProps({ ...common, src: image.desktop }).props;
  const { srcSet: tablet } = getImageProps({ ...common, src: image.tablet }).props;
  const { srcSet: mobile, ...rest } = getImageProps({ ...common, src: image.mobile }).props;

  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={desktop} />
      <source media="(min-width: 810px)" srcSet={tablet} />
      <img {...rest} srcSet={mobile} alt={alt} className={className ?? "object-cover"} />
    </picture>
  );
}
