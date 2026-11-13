import { Placeholder } from "@/components/Placeholder/Placeholder";
import { ROUTES } from "../routes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: ROUTES.placeholder.metadata.title,
  description: ROUTES.placeholder.metadata.description,
  openGraph: {
    title: ROUTES.placeholder.metadata.title,
    description: ROUTES.placeholder.metadata.description,
    images: [
      {
        url: "/logo.png",
        width: 216,
        height: 6,
      },
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://octopus-zuru.vercel.app",
  ),
};

export default function Page() {
  return <Placeholder />;
}
