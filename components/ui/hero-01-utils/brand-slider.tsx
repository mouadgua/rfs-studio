export interface BrandList {
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
            <span
              key={brand.name}
              className="text-sm font-semibold tracking-[-0.03em] text-[#1d2b24]/60"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
