import Image from "next/image";

export interface BrandList {
  image: string;
  lightimg: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  return (
    <section className="border-y border-[#d9cdbd] bg-[#fbf8f2]/70">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-7 px-6 py-8 lg:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8b7561]">
          Selected collaborators
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          {brandList.map((brand) => (
            <Image
              key={brand.name}
              src={brand.image}
              alt={brand.name}
              width={112}
              height={24}
              unoptimized
              className="h-5 w-auto max-w-28 object-contain opacity-60 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
