"use client";

import { MessageCircle, CalendarCheck, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    number: "١",
    title: "تواصل معنا",
    description:
      "راسلنا عبر واتساب أو الهاتف، واخبرنا بنوع مناسبتك وتاريخها وعدد الضيوف.",
  },
  {
    icon: CalendarCheck,
    number: "٢",
    title: "احجز الباقة",
    description:
      "نختار معك الباقة المناسبة، نحدد التفاصيل ونؤكد الحجز بدون تعقيد.",
  },
  {
    icon: Coffee,
    number: "٣",
    title: "استمتع بالضيافة",
    description:
      "نصل في الموعد، نجهز كل شيء ونقدم لضيوفك تجربة قهوة عربية أصيلة.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-10 md:py-14" dir="rtl">
      <div className="w-full max-w-[95%] mx-auto">
        {/* Outer green pill container — matches new design's "how it works" block */}
        <div className="bg-[#E6EEDB] rounded-[48px] py-20 px-6 md:px-14">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              {/* Left — header + CTA */}
              <div className="md:w-1/3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#5C6E55] text-sm font-semibold mb-5">
                  كيف نعمل
                </span>
                <h2 className="text-3xl font-bold text-[#2A3B25] mb-4 leading-[1.2]">
                  خطوات بسيطة
                  <br />
                  لراحة بالك
                </h2>
                <p className="text-[#5C6E55] leading-relaxed mb-8">
                  من أول تواصل حتى آخر فنجال — نرافقك في كل خطوة.
                </p>
                {/* Pink arrow button */}
                <div className="w-12 h-12 rounded-full bg-[#E845A8] flex items-center justify-center shadow-[0_4px_15px_rgba(232,69,168,0.3)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Right — steps grid */}
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-[#F4F8EC] rounded-[24px] p-6 flex flex-col items-center text-center group">
                      {/* Number circle */}
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-xl text-[#2A3B25] mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 text-[#E845A8]">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>

                      <h3 className="font-bold text-[#2A3B25] mb-2 text-base">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5C6E55] leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
