import React from 'react';
import CategoryHeader from '../components/category/CategoryHeader';
import ProductGrid from '../components/category/ProductGrid';
import { products } from '../data/products';

const HardwareToolsPage = () => {
  const hardwareToolsProducts = products.filter(product => product.category === 'Hardware & Tools');
  
  return (
    <div>
      <CategoryHeader 
        title="Hardware & Tools" 
        description="Find high-quality hardware and tools from Canadian manufacturers for all your DIY projects and professional needs. Built to last with Canadian craftsmanship."
        backgroundImage="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={hardwareToolsProducts} category="Hardware & Tools" />
      </div>
    </div>
  );
};

export default HardwareToolsPage;