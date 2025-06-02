import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../data/products';
import { Filter, SortAsc, SortDesc } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  category: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, category }) => {
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0; // Default is featured, which is the original order
    }
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{category}</h1>
          <p className="text-gray-600">{products.length} products</p>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center">
          <button 
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
          
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      
      {/* Filters section (mobile friendly) */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-gray-800 mb-3">Filter Options</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Min" 
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
                <span>-</span>
                <input 
                  type="text" 
                  placeholder="Max" 
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">In Stock Only</label>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="inStock" 
                  className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
                  Show only in-stock items
                </label>
              </div>
            </div>
            
            <div className="pt-2 flex justify-end space-x-2">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-1">
                Reset
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;