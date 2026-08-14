import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { slot, type ImageKey } from "@/lib/images";

const keys: ImageKey[] = ["strip1", "strip2", "strip3", "strip4"];

export function ImageStrip() {
  return (
    <section className="bg-cream px-6 pb-8 lg:px-12">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {keys.map((key, i) => {
          const image = slot(key);
          return (
            <Reveal
              key={key}
              delay={i * 60}
              className="group relative aspect-[16/10] overflow-hidden shadow-card transition-[box-shadow] duration-300 ease-out hover:shadow-card-hover"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:group-hover:scale-100"
                sizes="25vw"
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
