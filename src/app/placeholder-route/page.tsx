import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Metadata } from "next";
import { ROUTES } from "@/app/routes";

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
};

export default function Page() {
  return <Placeholder />;
}
