import React from 'react';
import HeroSection from './Hero';
import FeaturesOverview from './FeaturesOverview';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import FAQs from './FAQs';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesOverview />
      <HowItWorks />
      <Testimonials />
      <AboutSection />
      <FAQs />
      <Footer />
    </div>
  );
};

export default LandingPage;
