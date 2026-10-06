import ContactSection from '@/components/ContactSection';
import ServicesMarquee from '@/components/ServicesMarquee';
import StackCategoryBento from '@/components/stack/StackCategoryBento';
import StackComparisonTable from '@/components/stack/StackComparisonTable';
import StackHero from '@/components/stack/StackHero';
import PremiumTechStack from '@/components/TechStack';
import TrustedBy from '@/components/TrustedBy';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Stack | Adhabits',
  description: 'Explore the technologies Adhabits uses to build modern websites, digital products, and scalable business solutions.',
  alternates: { canonical: '/stack' },
};

const Page = () => {
  return (
    <div>
      <StackHero/>
      <TrustedBy/>
      <StackCategoryBento/>
      <PremiumTechStack/>
      <StackComparisonTable/>
      <ServicesMarquee/>
      <ContactSection/>
    </div>
  );
}

export default Page;
