import React from 'react';
import HeroSection from './Hero';
import FeaturesOverview from './FeaturesOverview';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import FAQs from './FAQs';
import Footer from './Footer';
import NavigationBar from './NagivationBar';

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
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
