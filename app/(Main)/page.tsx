// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventTypesSection from "@/components/EventTypesSection";
import StatsSection from "@/components/StatsSection";
import { GallerySection } from "@/components/GallerySection";
import { CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import { FetchProjectData } from "@/lib/FetchProjectData";

export default async function HomePage() {
  const { data } = await FetchProjectData();

  return (
    <main
      className="overflow-x-hidden container mx-auto"
      style={{ backgroundColor: "var(--main-background)" }}>
      <HeroSection {...data.hero} />
      <StatsSection />
      <AboutSection
        {...data.about}
        features={data.whyUs.features}
        whyUsDescription={data.whyUs.description ?? ""}
      />
      <ServicesSection {...data.services} images={data.gallery.slice(0, 4)} />
      <EventTypesSection />
      <HowItWorksSection />

      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <GallerySection gallery={data.gallery.slice(4)} />
      <TestimonialsSection />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </main>
  );
}
