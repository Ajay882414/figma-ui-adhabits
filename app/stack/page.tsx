import ContactSection from '@/components/ContactSection';
import ServicesMarquee from '@/components/ServicesMarquee';
import StackCategoryBento from '@/components/stack/StackCategoryBento';
import StackComparisonTable from '@/components/stack/StackComparisonTable';
import StackHero from '@/components/stack/StackHero';
import PremiumTechStack from '@/components/TechStack';
import TrustedBy from '@/components/TrustedBy';
import React from 'react';

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
