import { Metadata } from "next";
import { ROUTES } from "@/app/routes";

type PageProps = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { productId } = await params;

  return {
    title: ROUTES.product(productId).metadata.title,
    description: ROUTES.product(productId).metadata.description,
    openGraph: {
      title: ROUTES.product(productId).metadata.title,
      description: ROUTES.product(productId).metadata.description,
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
}

export default async function Page({ params }: PageProps) {
  const { productId } = await params;

  return (
    <section className="container-layout flex items-center justify-center h-[70vh]">
      <h1 className="font-bold text-[20px]">
        Product detail page with slug: {productId}
      </h1>
    </section>
  );
}
