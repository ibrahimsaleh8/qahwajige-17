import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجيين وصبابيين",
    short_name: "قهوجيين وصبابيين",
    description:
      "توفير قهوجيين وصبابيين محترفين لخدمات الضيافة في الأفراح والمناسبات والفعاليات مع تقديم القهوة العربية بأعلى مستوى من الاحتراف.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f4f8ec",
    theme_color: "#e845a8",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
