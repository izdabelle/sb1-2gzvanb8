import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  linkTo: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  linkTo
}) => {
  return (
    <Link 
      to={linkTo} 
      className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20" />
      </div>
      
      <div className="absolute bottom-0 p-6 w-full">
        <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-red-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-white group-hover:text-red-300 transition-colors">
          <span className="text-sm font-medium">Explore Category</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;