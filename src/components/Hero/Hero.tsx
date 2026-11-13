import { Heading } from "@/components/Heading/Heading";

export function Hero() {
  return (
    <section className="h-dvh flex justify-center bg-[url('/hero-desktop.png')] bg-cover bg-center bg-no-repeat">
      <div className="mt-[104px] tablet:mt-[180px]">
        <Heading
          title="Octupos Hair dryer"
          description="A powerful ionic hair dryer with a 110,000 RPM motor for fast drying and less frizz"
          buttonLabel="Learn more"
          variant="primary"
        />
      </div>
    </section>
  );
}
