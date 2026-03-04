"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "٥٠٠+", label: "مناسبة نُفذت" },
  { value: "١٠+", label: "سنوات خبرة" },
  { value: "١٠٠٪", label: "رضا العملاء" },
];

export default function StatsSection() {
  return (
    <section className="py-10 md:py-14" dir="rtl">
      <div className="w-full max-w-[95%] mx-auto">
        <div className="bg-[#1A2617] rounded-[48px] py-16 md:py-20 px-6 relative overflow-hidden">
          {/* Decorative pink glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E845A8] rounded-full blur-[80px] opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <span className="block text-5xl md:text-6xl font-black mb-2 text-[#E845A8]">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-medium text-[#F4F8EC]/80">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
