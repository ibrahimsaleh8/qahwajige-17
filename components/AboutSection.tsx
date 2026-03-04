import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import Image from "next/image";

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
  image,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            {title}
          </h2>
          {description1 && (
            <p className="text-[#5C6E55] max-w-2xl mx-auto leading-relaxed">
              {description1}
            </p>
          )}
        </div>

        {/* Features Grid */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 hover:shadow-xl transition-all duration-300 group border border-[#D1DBC6]/50">
                {/* Icon badge */}
                <div className="w-16 h-16 bg-[#F4F8EC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-[#E845A8]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2A3B25] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5C6E55] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner — image + text side by side */}
        {(image || whyUsDescription) && (
          <div className="bg-[#E6EEDB] rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            {image && (
              <div className="relative min-h-75 lg:min-h-105 overflow-hidden">
                <Image
                  src={image}
                  alt={title ?? ""}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A2617]/40 to-transparent" />
              </div>
            )}

            {/* Text side */}
            {whyUsDescription && (
              <div className="flex flex-col justify-center p-10 md:p-14">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#5C6E55] text-sm font-semibold mb-5 w-fit">
                  لماذا نحن؟
                </span>
                <p className="text-[#2A3B25] text-lg leading-relaxed font-medium">
                  {whyUsDescription}
                </p>

                {/* Decorative stat pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm">
                    <span className="font-black text-[#ca067c] text-lg">
                      ٥٠٠+
                    </span>
                    <span className="text-sm text-black">عميل سعيد</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm">
                    <span className="font-black text-[#ca067c] text-lg">
                      ١٠٠٪
                    </span>
                    <span className="text-sm text-black">رضا تام</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
