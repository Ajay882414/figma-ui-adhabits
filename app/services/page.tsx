import ContactSection from '@/components/ContactSection';
// import CtaFooterSection from '@/components/CtaFooterSection';
import FaqSection from '@/components/FaqSection';
import MarketingSolutionsVertical from '@/components/services/MarketingSolutionsVertical';
import ServicesHero from '@/components/services/ServicesHero';
import TechSolutionsVertical from '@/components/services/TechSolutionsVertical';
import TechStackShowcase from '@/components/services/TechStackShowcase';
import ServicesMarquee from '@/components/ServicesMarquee';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustedBy from '@/components/TrustedBy';
import React from 'react';

const Page = () => {
    return (
        <div>
            <ServicesHero/>
            <TrustedBy />
            <TechSolutionsVertical/>
            <MarketingSolutionsVertical/>
            <TechStackShowcase/>
                  <ServicesMarquee/>
            
            <TestimonialsSection/>
            <FaqSection/>
                  <ServicesMarquee/>
            <ContactSection/>
            
            {/* <CtaFooterSection/> */}
        </div>
    );
}

export default Page;
