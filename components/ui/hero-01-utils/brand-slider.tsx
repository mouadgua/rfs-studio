export interface BrandList {
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  const marqueeText = brandList.map((brand) => brand.name).join("  ✦  ");
  const repeatedText = Array.from({ length: 4 }, () => `${marqueeText}  ✦  `).join("");

  return (
    <section
      aria-label="Selected collaborators"
      className="overflow-hidden border-y border-[#d9cdbd] bg-[#fbf8f2]/70 py-8 md:py-10"
    >
      <div className="w-full px-0">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#8b7561]">
          Selected collaborators
        </p>
        <div className="relative mt-2 w-screen max-w-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="xMidYMid meet"
            className="block aspect-[1440/220] h-auto w-full overflow-visible fill-[#1d2b24]"
            role="presentation"
          >
            <defs>
              <path id="collaborators-curve" d="M-120,48 Q720,285 1560,48" fill="none" />
            </defs>
            <text
              className="font-sans text-[56px] font-semibold uppercase tracking-[1px] md:text-[68px]"
              fill="currentColor"
            >
              <textPath href="#collaborators-curve" startOffset="0%">
                {repeatedText}
                <animate
                  attributeName="startOffset"
                  from="0%"
                  to="-25%"
                  dur="24s"
                  repeatCount="indefinite"
                />
              </textPath>
            </text>
          </svg>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#fbf8f2] to-transparent" />
        </div>
      </div>
    </section>
  );
}
