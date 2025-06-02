import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromoBanners from '../components/home/PromoBanners';
import CanadianBusinessSection from '../components/home/CanadianBusinessSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoBanners />
      <CanadianBusinessSection />
    </div>
  );
};

export default HomePage;