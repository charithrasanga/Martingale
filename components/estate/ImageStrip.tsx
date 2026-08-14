import Image from "next/image";
import { slot, type ImageKey } from "@/lib/images";

const keys: ImageKey[] = ["strip1", "strip2", "strip3", "strip4"];

export function ImageStrip() {
  return (
    <section className="bg-cream px-6 pb-8 lg:px-12">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {keys.map((key) => {
          const image = slot(key);
          return (
            <div key={key} className="relative aspect-[16/10]">
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="25vw" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
