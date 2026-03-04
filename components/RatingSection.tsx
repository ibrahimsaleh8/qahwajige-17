"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;
    setSelectedRating(value);
    setIsLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {}
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2" dir="rtl">
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= value;
        return (
          <span key={star} className="relative inline-block">
            {interactive ? (
              <motion.button
                type="button"
                disabled={isLoading || !mounted}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`p-2.5 rounded-2xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none ${
                  isActive
                    ? "bg-[#E845A8] border border-[#E845A8] shadow-[0_4px_10px_rgba(232,69,168,0.3)]"
                    : "bg-[#F4F8EC] border border-[#D1DBC6]"
                }`}
                aria-label={`تقييم ${star} من 5`}>
                <Star
                  className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-200"
                  style={{
                    fill: isActive ? "white" : "transparent",
                    color: isActive ? "white" : "#8B9D7D",
                  }}
                  strokeWidth={1.8}
                />
              </motion.button>
            ) : (
              <div
                className={`p-2.5 rounded-2xl ${
                  isActive
                    ? "bg-[#E845A8] border border-[#E845A8]"
                    : "bg-[#F4F8EC] border border-[#D1DBC6]"
                }`}>
                <Star
                  className="w-6 h-6 md:w-7 md:h-7"
                  style={{
                    fill: isActive ? "white" : "transparent",
                    color: isActive ? "white" : "#8B9D7D",
                  }}
                  strokeWidth={1.8}
                />
              </div>
            )}
          </span>
        );
      })}
    </div>
  );

  return (
    <section id="rating" className="py-16 md:py-24" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-black text-sm font-semibold mb-4">
            التقييمات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            قيّم تجربتك معنا
          </h2>
          <p className="text-black max-w-xl mx-auto leading-relaxed">
            رأيك يهمنا ويساعدنا نطور خدماتنا باستمرار.
          </p>
        </div>

        {/* Rating Card */}
        <div className="bg-white rounded-[48px] overflow-hidden border border-[#D1DBC6]/50 shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Stats Side */}
          <div className="lg:col-span-5 bg-[#F4F8EC] p-10 md:p-14 flex flex-col justify-center gap-8">
            <div>
              <h3 className="font-bold text-2xl text-[#2A3B25] mb-2">
                وش رأيك في تجربتك معنا؟
              </h3>
              <p className="text-black text-sm leading-relaxed">
                كل تقييم يساعدنا نكون أفضل لكم ولضيوفكم.
              </p>
            </div>

            {(averageRating > 0 || totalRatings > 0) && (
              <div className="flex gap-10">
                {averageRating > 0 && (
                  <div>
                    <span className="text-5xl font-black text-[#E845A8] block mb-1">
                      {averageRating.toFixed(1)}
                    </span>
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-3.5 h-3.5"
                          style={{
                            fill:
                              star <= Math.round(averageRating)
                                ? "#E845A8"
                                : "transparent",
                            color:
                              star <= Math.round(averageRating)
                                ? "#E845A8"
                                : "#D1DBC6",
                          }}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-black">متوسط التقييم</span>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div>
                    <span className="text-5xl font-black text-[#2A3B25] block mb-1">
                      {totalRatings}
                    </span>
                    <span className="text-xs text-black">
                      {totalRatings === 1 ? "تقييم" : "تقييمات"}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Decorative stat pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#D1DBC6]/50">
                <span className="font-black text-[#ca067c]">٥٠٠+</span>
                <span className="text-xs text-black">عميل سعيد</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-[#D1DBC6]/50">
                <span className="font-black text-[#ca067c]">١٠٠٪</span>
                <span className="text-xs text-black">رضا تام</span>
              </div>
            </div>
          </div>

          {/* Interaction Side */}
          <div className="lg:col-span-7 p-10 md:p-14 flex flex-col items-center justify-center gap-8">
            {submitted !== null && mounted ? (
              <motion.div
                className="flex flex-col items-center gap-6 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}>
                {renderStars(submitted, false)}
                <div className="bg-[#E6EEDB] border border-[#D1DBC6] px-10 py-6 rounded-[24px] text-center w-full max-w-sm">
                  <p className="font-bold text-xl text-[#2A3B25] mb-1">
                    يعطيك العافية! 🎉
                  </p>
                  <p className="text-sm text-black">تقييمك يساعدنا نكون أفضل</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center gap-6 w-full">
                {renderStars(displayRating || 0, true)}
                <p className="text-sm text-[#8B9D7D]">
                  {mounted && !isLoading && "اضغط على النجوم للتقييم"}
                  {isLoading && (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}>
                        ◌
                      </motion.span>
                      جاري الإرسال...
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
