import ContactHero from '@/components/contact/ContactHero';
import DirectChannelsBento from '@/components/contact/DirectChannelsBento';
import PreEngagementFaq from '@/components/contact/PreEngagementFaq';
import ContactSection from '@/components/ContactSection';
import CtaFooterSection from '@/components/CtaFooterSection';
import ServicesMarquee from '@/components/ServicesMarquee';
import TrustedBy from '@/components/TrustedBy';
import React from 'react';

const Page = () => {
  return (
    <div>
      <ContactHero/>
      <TrustedBy />
      <ContactSection/>
      <DirectChannelsBento/>
      <PreEngagementFaq/>
      <ServicesMarquee/>
    </div>
  );
}

export default Page;
