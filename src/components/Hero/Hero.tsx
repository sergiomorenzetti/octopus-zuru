import { Heading } from "@/components/Heading/Heading";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-dvh flex justify-center">
      <Image
        src="/hero-desktop.png"
        alt="Octupos Hair dryer"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="mt-[104px] tablet:mt-[180px] z-10 container-layout">
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
