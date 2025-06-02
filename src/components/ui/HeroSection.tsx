import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Home improvement supplies" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Supporting Canadian-Owned Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Everything You Need for Your Home
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Shop from a wide selection of products from Canadian-owned businesses, supporting local communities across the country.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="What are you looking for?"
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-4 top-4 h-6 w-6 text-gray-500" />
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/vehicles" className="text-white hover:text-red-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors">
                Vehicles
              </Link>
              <Link to="/home-kitchen" className="text-white hover:text-red-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors">
                Home & Kitchen
              </Link>
              <Link to="/hardware-tools" className="text-white hover:text-red-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors">
                Hardware & Tools
              </Link>
              <Link to="/" className="text-white hover:text-red-300 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors">
                Special Offers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;