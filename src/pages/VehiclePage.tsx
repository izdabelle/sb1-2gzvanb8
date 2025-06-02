import React from 'react';
import CategoryHeader from '../components/category/CategoryHeader';
import ProductGrid from '../components/category/ProductGrid';
import { products } from '../data/products';

const VehiclePage = () => {
  const vehicleProducts = products.filter(product => product.category === 'Vehicles');
  
  return (
    <div>
      <CategoryHeader 
        title="Vehicles" 
        description="Discover quality vehicles from Canadian-owned dealerships and manufacturers. From family SUVs to rugged trucks, we have the perfect vehicle for your needs."
        backgroundImage="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={vehicleProducts} category="Vehicles" />
      </div>
    </div>
  );
};

export default VehiclePage;