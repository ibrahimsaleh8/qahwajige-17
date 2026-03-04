"use client";

import { PackageData } from "@/lib/responseType";
import { Check, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");

  if (!packages?.length) return null;

  return (
    <section id="packages" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            باقاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            اختر الباقة المناسبة لفعاليتك
          </h2>
          <p className="text-[#5C6E55] max-w-2xl mx-auto leading-relaxed">
            باقات مصممة بعناية لتناسب جميع أنواع المناسبات — من اللقاءات الخاصة
            إلى الفعاليات الكبيرة.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;
            const message = encodeURIComponent(
              `مرحباً 👋 أود طلب باقة "${pkg.title}" من فضلكم.`,
            );
            const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative flex flex-col overflow-hidden bg-white rounded-[32px] border border-[#D1DBC6]/50 hover:shadow-xl transition-all duration-300 ${
                  isFeatured ? "lg:scale-[1.03] ring-2 ring-[#E845A8]/20" : ""
                }`}>
                {/* Image */}
                {pkg.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2617]/30 to-transparent" />
                    {isFeatured && (
                      <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[#E845A8] text-white text-xs font-bold shadow-[0_4px_10px_rgba(232,69,168,0.35)]">
                        الأكثر طلباً
                      </span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Icon box + title */}
                  <div className="w-14 h-14 bg-[#F4F8EC] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-black text-[#E845A8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2A3B25] mb-5">
                    {pkg.title}
                  </h3>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-[#5C6E55]">
                        <Check
                          className="size-4 mt-0.5 shrink-0 text-[#E845A8]"
                          strokeWidth={2.5}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 mt-auto ${
                      isFeatured
                        ? "bg-[#E845A8] text-white shadow-[0_4px_15px_rgba(232,69,168,0.3)] hover:bg-[#C9308D] hover:shadow-[0_6px_20px_rgba(232,69,168,0.4)] hover:-translate-y-0.5"
                        : "border-2 border-[#D1DBC6] text-[#5C6E55] hover:bg-[#D1DBC6] hover:text-[#2A3B25]"
                    }`}>
                    {isFeatured ? (
                      <>
                        <FaWhatsapp className="size-4" />
                        اطلب الباقة الآن
                      </>
                    ) : (
                      <>
                        اطلب الباقة الآن
                        <ArrowLeft className="size-4" />
                      </>
                    )}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
