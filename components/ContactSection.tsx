"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp?.replace("+", "");

  const contactItems = [
    {
      icon: Phone,
      label: "الهاتف",
      value: phone,
      href: phone ? `tel:${phone}` : null,
      dir: "ltr" as const,
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: whatsapp,
      href: whatsapp ? `https://wa.me/${formattedWhatsapp}` : null,
      dir: "ltr" as const,
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: email,
      href: email ? `mailto:${email}` : null,
      dir: "rtl" as const,
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: address,
      href: null,
      dir: "rtl" as const,
    },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="py-20 md:py-28" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B25] mb-4">
            خل الكلام بيننا سهل
          </h2>
          <p className="text-[#5C6E55] max-w-xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. اختر طريقة التواصل اللي تناسبك.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#1A2617] rounded-[48px] overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E845A8] rounded-full blur-[80px] opacity-20 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12">
            {/* Left */}
            <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-between gap-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#F4F8EC] mb-4">
                  جاهزين لخدمتك
                </h3>
                <p className="text-[#8B9D7D] mb-8">
                  تواصل معنا الآن لحجز موعدك وضمان أفضل خدمة ضيافة في الرياض.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {whatsapp && (
                    <a
                      href={`https://wa.me/${formattedWhatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#E845A8] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#C9308D] transition-all duration-300">
                      <FaWhatsapp className="w-5 h-5" />
                      تواصل الآن
                    </a>
                  )}

                  {phone && (
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center justify-center gap-2 border border-[#8B9D7D] text-[#F4F8EC] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#2A3B25] transition-colors duration-300">
                      اتصل بنا
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Contact Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      viewport={{ once: true }}
                      className="bg-[#2A3B25] rounded-4xl p-5">
                      <div className="w-9 h-9 bg-[#1A2617] rounded-xl flex items-center justify-center mb-3">
                        <Icon
                          className="w-4 h-4 text-[#E845A8]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="text-xs text-[#8B9D7D] block mb-1">
                        {item.label}
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          dir={item.dir}
                          className="font-bold text-sm text-[#F4F8EC] break-all hover:text-[#E845A8] transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#D1DBC6]">{item.value}</p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right - Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative min-h-100 lg:min-h-full overflow-hidden lg:rounded-r-[48px]">
              <iframe
                src={mapEmbedSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الشركة على الخريطة"
                className="absolute inset-0 w-full h-full border-0"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
