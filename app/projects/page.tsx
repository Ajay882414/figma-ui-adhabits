"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

import ServicesMarquee from "@/components/ServicesMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectImpactMetrics from "@/components/projects/ProjectImpactMetrics";
import ProcessWorkflowCompact from "@/components/projects/ProcessWorkflowCompact";
import ContactSection from "@/components/ContactSection";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="min-h-screen bg-white">
      
      <ProjectsHero
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <ProjectsGrid activeCategory={activeCategory} />
      <ProjectImpactMetrics/>
      <ProcessWorkflowCompact/>
      <ServicesMarquee />
      <TestimonialsSection />
      <ContactSection/>
      <ServicesMarquee />
      <FaqSection />
      
    </main>
  );
}