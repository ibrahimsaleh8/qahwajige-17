"use client";

import { motion } from "framer-motion";
import { Heart, Briefcase, Users, Sparkles } from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "أعراس",
    description: "ضيافة راقية ليومكم الخاص",
  },
  {
    icon: Briefcase,
    title: "فعاليات شركات",
    description: "اجتماعات ومؤتمرات رسمية",
  },
  {
    icon: Users,
    title: "مناسبات عائلية",
    description: "تجمعات وزيارات عائلية",
  },
  {
    icon: Sparkles,
    title: "فعاليات خاصة",
    description: "حفلات واحتفالات متنوعة",
  },
];

export default function EventTypesSection() {
  return (
    <section id="events" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            أنواع المناسبات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            نخدم جميع مناسباتكم
          </h2>
          <p className="text-[#5C6E55] max-w-xl mx-auto leading-relaxed">
            من اللقاءات الصغيرة إلى الفعاليات الكبرى — نجهز لكم تجربة ضيافة لا
            تُنسى.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] p-8 text-center hover:shadow-xl transition-all duration-300 group border border-[#D1DBC6]/50">
                {/* Icon box */}
                <div className="w-16 h-16 bg-[#F4F8EC] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#E845A8] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                <h3 className="font-bold text-lg text-[#2A3B25] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C6E55] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
