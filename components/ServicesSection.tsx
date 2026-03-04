import { GalleryImageData, ServicesSectionData } from "@/lib/responseType";
import Image from "next/image";

export default function ServicesSection({
  description,
  items,
  label,
  title,
  images,
}: ServicesSectionData & {
  images: GalleryImageData[];
}) {
  return (
    <section id="services" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            {title}
          </h2>
          <p className="text-[#5C6E55] max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items?.map((card, index) => {
            const image = images?.[index] ?? images?.[0];
            return (
              <div
                key={card.title}
                className="bg-white rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-300 group border border-[#D1DBC6]/50">
                {/* Image or placeholder */}
                {image?.url ? (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt || "card.title"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2617]/30 to-transparent" />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-[#E6EEDB] flex items-center justify-center">
                    <span className="text-5xl font-black text-[#2A3B25] opacity-10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Card body */}
                <div className="p-8">
                  {/* Icon box */}
                  <div className="w-16 h-16 bg-[#F4F8EC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-black text-[#E845A8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2A3B25] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#5C6E55] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
