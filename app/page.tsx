import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import CtaFooterSection from "@/components/CtaFooterSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
// import PremiumVideoShowcase from "@/components/PremiumVideoShowcase";
import ProcessSection from "@/components/ProcessSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedBy from "@/components/TrustedBy";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Hero />
      <TrustedBy />
      {/* <PremiumVideoShowcase/>  */}
      <AboutSection/>
      <ServicesSection/>
      <ProcessSection/>
      <TeamSection/>
      <BlogSection/>
      <ServicesMarquee/>
      <TestimonialsSection/>
      <ContactSection/>
      <ServicesMarquee/>
      <FaqSection/>
      {/* <CtaFooterSection/> */}

    </main>
  );
}