import ContactHero from '@/components/contact/ContactHero';
import DirectChannelsBento from '@/components/contact/DirectChannelsBento';
import PreEngagementFaq from '@/components/contact/PreEngagementFaq';
import ContactSection from '@/components/ContactSection';
import CtaFooterSection from '@/components/CtaFooterSection';
import ServicesMarquee from '@/components/ServicesMarquee';
import TrustedBy from '@/components/TrustedBy';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Adhabits | Start a Technology or Marketing Project',
  description: 'Talk with Adhabits about web development, UI/UX design, AI automation, SEO, or a digital marketing project for your business.',
  alternates: { canonical: '/contact' },
};

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
