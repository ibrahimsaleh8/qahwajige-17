"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "تجربة مميزة جداً. الصبّابون محترفون والقهوة كانت على أعلى مستوى. أنصح بهم لكل من يبحث عن ضيافة عربية أصيلة.",
    author: "سعد القحطاني",
    role: "حفل زفاف",
  },
  {
    quote:
      "تعامل راقٍ والتزام تام بالمواعيد. ضيوفنا أعجبوا بالخدمة وطريقة التقديم. شكراً لكم.",
    author: "نورة السديري",
    role: "مناسبة عائلية",
  },
  {
    quote:
      "من أفضل خدمات القهوة العربية في الرياض. الباقات مناسبة والأسعار معقولة. نتعامل معهم دائماً.",
    author: "محمد العتيبي",
    role: "فعالية شركات",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-[#5C6E55] max-w-xl mx-auto leading-relaxed">
            ثقة عملائنا هي أكبر دليل على جودة خدماتنا.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 flex flex-col hover:shadow-xl transition-all duration-300 border border-[#D1DBC6]/50">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-[#E845A8]"
                    fill="#E845A8"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#5C6E55] leading-relaxed flex-1 mb-8 italic text-base">
                {'"'}
                {item.quote}
                {'"'}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <FaUserCircle className="w-12 h-12 text-[#8B9D7D]" />
                <div>
                  <p className="font-bold text-[#2A3B25] text-sm">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#8B9D7D]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
