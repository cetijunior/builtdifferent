import { Agenda } from "@/components/agenda";
import { CaptureForm } from "@/components/capture-form";
import { Proof } from "@/components/proof";
import { EventLegacy } from "@/components/event-legacy";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { FinalCta, SiteFooter } from "@/components/site-footer";
import { FounderSection } from "@/components/founder-section";
import { Hero } from "@/components/hero";
import { MomentsGallery } from "@/components/moments-gallery";
import { Pricing } from "@/components/pricing";
import { Qualifier } from "@/components/qualifier";
import { SiteHeader } from "@/components/site-header";
import { Speakers } from "@/components/speakers";
import { StickyCta } from "@/components/sticky-cta";
import { VenueShowcase } from "@/components/venue-showcase";
import { WhatsappFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Proof />
        <Qualifier />
        <Experience />
        <VenueShowcase />
        <EventLegacy />
        <MomentsGallery />
        <Speakers />
        <Agenda />
        <Pricing />
        <FounderSection />
        <CaptureForm />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
      <WhatsappFloat />
    </>
  );
}
