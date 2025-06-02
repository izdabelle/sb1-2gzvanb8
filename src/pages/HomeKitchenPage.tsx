import React from 'react';
import CategoryHeader from '../components/category/CategoryHeader';
import ProductGrid from '../components/category/ProductGrid';
import { products } from '../data/products';

const HomeKitchenPage = () => {
  const homeKitchenProducts = products.filter(product => product.category === 'Home & Kitchen');
  
  return (
    <div>
      <CategoryHeader 
        title="Home & Kitchen" 
        description="Enhance your living space with quality home and kitchen products from Canadian businesses. Find furniture, appliances, and decor to make your house a home."
        backgroundImage="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={homeKitchenProducts} category="Home & Kitchen" />
      </div>
    </div>
  );
};

export default HomeKitchenPage;