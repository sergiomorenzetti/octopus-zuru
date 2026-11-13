type ProductPageProps = PageProps<"/products/[productId]">;

export default async function Page({ params }: ProductPageProps) {
  const { productId } = await params;

  return (
    <section className="container-layout flex items-center justify-center h-[70vh]">
      <h1 className="font-bold text-[20px]">
        Product detail page with slug: {productId}
      </h1>
    </section>
  );
}
