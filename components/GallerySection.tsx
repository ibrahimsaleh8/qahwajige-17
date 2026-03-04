"use client";

import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
              معرض الأعمال
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-2">
              من ذكريات مناسباتنا
            </h2>
            <p className="text-[#5C6E55]">
              لقطات حية من فعاليات ومناسبات قمنا بخدمتها في الرياض.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[#E845A8] font-bold hover:gap-3 transition-all duration-300 shrink-0">
            عرض الكل
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Grid */}
        {gallery.length === 0 ? (
          <div className="flex items-center justify-center min-h-75 rounded-[48px] bg-[#E6EEDB]">
            <p className="text-sm text-[#8B9D7D]">المعرض قيد التحديث</p>
          </div>
        ) : (
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-125">
            {/* First image — large */}
            {gallery[0] && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="col-span-2 row-span-2 rounded-[32px] overflow-hidden shadow-lg relative group cursor-pointer">
                <Image
                  src={gallery[0].url}
                  alt={gallery[0].alt ?? "صورة-1"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div
                  className={`absolute inset-0 bg-linear-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === 0 ? "opacity-100" : "opacity-0"
                  }`}
                />
                {hoveredIndex === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-end p-8">
                    <span className="text-white font-bold text-sm">
                      {gallery[0].alt ?? "صورة-1"}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Remaining images */}
            {gallery.slice(1, 5).map((image, i) => {
              const index = i + 1;
              const isWide = index === 4;

              return (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`rounded-[24px] overflow-hidden shadow-md relative group cursor-pointer h-full ${
                    isWide ? "col-span-2" : "col-span-1"
                  }`}>
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/40 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-end p-5">
                      <span className="text-white font-bold text-xs">
                        {image.alt ?? `صورة-${index + 1}`}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
