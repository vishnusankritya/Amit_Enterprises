import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ServiceHighlights from '../components/home/ServiceHighlights';
import Testimonials from '../components/home/Testimonials';
import QuickBooking from '../components/home/QuickBooking';
import TrustIndicators from '../components/home/TrustIndicators';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <ServiceHighlights />
      <Testimonials />
      <QuickBooking />
      <TrustIndicators />
    </div>
  );
};

export default HomePage;