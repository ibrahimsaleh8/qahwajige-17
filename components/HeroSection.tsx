import HeroLinks from "./AnimatedComponents/HeroLinks";
import { HeroSectionData } from "@/lib/responseType";
import heroImage from "@images/wide_image.jpeg";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
}: HeroSectionData) {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage.src})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/60 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl space-y-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white text-sm font-semibold">
            ☕ ضيافة عربية أصيلة
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {subheadline}
          </p>

          <HeroLinks whatsApp={whatsApp} />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10">
            <Stat label="عميل سعيد" value="+500" />
            <Stat label="مناسبات ناجحة" value="+120" />
            <Stat label="قهوجيين محترفين" value="+40" />
            <Stat label="سنوات خبرة" value="+10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/15 backdrop-blur border border-white/20 px-5 py-4 text-center">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-sm text-white/80 mt-1">{label}</div>
    </div>
  );
}
