import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  linkTo: string;
  linkText: string;
  variant?: 'primary' | 'secondary';
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  imageUrl,
  linkTo,
  linkText,
  variant = 'primary'
}) => {
  return (
    <div className={`
      relative overflow-hidden rounded-lg shadow-md
      ${variant === 'primary' ? 'bg-red-600' : 'bg-blue-600'}
    `}>
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative p-6 md:p-8 flex flex-col items-start h-full">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 mb-4 max-w-md">{subtitle}</p>
        <Link
          to={linkTo}
          className={`
            mt-auto inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors
            ${variant === 'primary' 
              ? 'bg-white text-red-600 hover:bg-gray-100' 
              : 'bg-white text-blue-600 hover:bg-gray-100'
            }
          `}
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;