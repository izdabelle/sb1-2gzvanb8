import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  isFeatured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  rating, 
  category,
  isFeatured = false
}) => {
  return (
    <div className={`
      bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1
      ${isFeatured ? 'border-2 border-red-500' : 'border border-gray-200'}
    `}>
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        {isFeatured && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
        </button>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{category}</div>
        <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 h-12">{name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'fill-current' : ''}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 100) + 10})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-800">${price.toFixed(2)}</div>
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;