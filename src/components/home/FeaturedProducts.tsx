import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  // Get 8 random products as featured
  const featuredProducts = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked selection of quality products from Canadian-owned businesses.
            </p>
          </div>
          <Link 
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-800 font-medium mt-4 md:mt-0 transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
              category={product.category}
              isFeatured={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;