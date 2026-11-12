import { Heading } from "@/components/Heading/Heading";

export function Hero() {
  return (
    <section className="h-dvh flex justify-center bg-[url('/hero-desktop.png')] bg-cover bg-center bg-no-repeat">
      <div className="mt-[104px] tablet:mt-[180px]">
        <Heading
          title="Octupos Hair dryer"
          description="Hero Description"
          buttonLabel="Learn more"
          variant="primary"
        />
      </div>
    </section>
  );
}
