"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone, Coffee, Sparkles } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/qahwajeyn",
      label: "انستقرام",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@user61719922769991",
      label: "تيك توك",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
      label: "فيسبوك",
    },
    { icon: FaTwitter, href: "https://x.com/NghmAbw11703", label: "تويتر" },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
      label: "يوتيوب",
    },
  ];

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
    { name: "اتصل بنا", href: "/#contact" },
  ];

  return (
    <footer className="overflow-hidden mt-8" dir="rtl">
      <div className="bg-[#1A2617] rounded-t-[64px] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#E845A8] rounded-full blur-[80px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
          {/* CTA */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#F4F8EC] mb-6">
            جاهز لمناسبة لا تُنسى؟
          </h2>

          <p className="text-[#8B9D7D] text-lg mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 bg-[#E845A8] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#C9308D] transition-all duration-300">
              احجز الآن
              <Sparkles className="w-5 h-5" />
            </Link>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 border border-[#8B9D7D] text-[#F4F8EC] px-10 py-5 rounded-full font-bold hover:bg-[#2A3B25] transition-colors duration-300">
                تواصل عبر الهاتف
              </a>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-[#2A3B25] pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Brand */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-[#E845A8] rounded-full flex items-center justify-center text-white">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="font-black text-xl text-[#F4F8EC]">
                  {brandName}
                </span>
              </div>

              {/* Nav */}
              <div className="flex flex-wrap justify-center gap-6">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white hover:text-[#F4F8EC] transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 bg-[#2A3B25] hover:bg-[#E845A8] rounded-full flex items-center justify-center text-[#8B9D7D] hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Row */}
          {(address || email || phone) && (
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-[#2A3B25]">
              {address && (
                <div className="flex items-center gap-2 text-sm text-white">
                  <MapPin
                    className="w-4 h-4 text-[#E845A8]"
                    strokeWidth={1.8}
                  />
                  <span>{address}</span>
                </div>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm text-white hover:text-[#F4F8EC] transition-colors">
                  <Mail className="w-4 h-4 text-[#E845A8]" strokeWidth={1.8} />
                  <span>{email}</span>
                </a>
              )}

              {phone && (
                <a
                  href={`tel:${phone}`}
                  dir="ltr"
                  className="flex items-center gap-2 text-sm text-white hover:text-[#F4F8EC] transition-colors">
                  <Phone className="w-4 h-4 text-[#E845A8]" strokeWidth={1.8} />
                  <span>{phone}</span>
                </a>
              )}
            </div>
          )}

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-[#2A3B25] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>
              © {currentYear} {brandName}. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F4F8EC] transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-[#F4F8EC] transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
