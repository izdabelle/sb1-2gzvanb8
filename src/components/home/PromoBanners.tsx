import React from 'react';
import Banner from '../ui/Banner';

const PromoBanners = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Banner
            title="Summer DIY Projects"
            subtitle="Get all the tools and supplies you need for your summer home improvement projects. Shop now and save 15%!"
            imageUrl="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            linkTo="/hardware-tools"
            linkText="Shop Tools"
            variant="primary"
          />
          
          <Banner
            title="Kitchen Renovation Sale"
            subtitle="Transform your kitchen with our selection of Canadian-made appliances and fixtures. Free delivery on orders over $1000."
            imageUrl="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            linkTo="/home-kitchen"
            linkText="Explore Kitchen"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;