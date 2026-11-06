"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ProjectImage } from "@/lib/projects";

type ProjectGalleryProps = {
  images: ProjectImage[];
  accent: string;
};

export default function ProjectGallery({ images, accent }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];

  function move(direction: -1 | 1) {
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  }

  return (
    <section aria-label="Project gallery" className="mt-24">
      <div
        className="relative overflow-hidden rounded-[2rem]"
        style={{ backgroundColor: accent }}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          width={1600}
          height={1000}
          quality={70}
          className="aspect-[16/10] w-full object-cover"
        />
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous image"
              className="absolute left-5 top-1/2 rounded-full bg-[#1d2b24]/80 p-3 text-[#f4f0e8] backdrop-blur transition-colors hover:bg-[#d96f4f]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next image"
              className="absolute right-5 top-1/2 rounded-full bg-[#1d2b24]/80 p-3 text-[#f4f0e8] backdrop-blur transition-colors hover:bg-[#d96f4f]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {hasMultipleImages && (
        <div className="mt-4 flex gap-2" role="tablist" aria-label="Gallery images">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-label={`View image ${index + 1}`}
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#d96f4f]" : "bg-[#d9cdbd]"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
