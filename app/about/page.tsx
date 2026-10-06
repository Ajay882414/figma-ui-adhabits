import Navbar from "@/components/Navbar";

import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaFooterSection from "@/components/CtaFooterSection";
import AboutHero from "@/components/about/AboutHero";
import AgencyStory from "@/components/about/AgencyStory";
import StatsBento from "@/components/about/StatsBento";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import AgencyValues from "@/components/about/AgencyValues";
import TrustedBy from "@/components/TrustedBy";
import ServicesMarquee from "@/components/ServicesMarquee";


export const metadata = {
  title: "About Us & Methodology | Adhabits",
  description:
    "Learn about our origin, engineering-first marketing principles, and the team building high-performance digital ecosystems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
       <TrustedBy />
      <AgencyStory />
            <ServicesMarquee/>
      
      <StatsBento />
      <CompanyTimeline />
      <AgencyValues />
            <ServicesMarquee/>
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
            <ServicesMarquee/>
    </main>
  );
}