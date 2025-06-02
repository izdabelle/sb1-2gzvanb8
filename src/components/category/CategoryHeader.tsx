import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  title, 
  description,
  backgroundImage
}) => {
  return (
    <div className="relative bg-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt={title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-white font-medium">{title}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-200 text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;