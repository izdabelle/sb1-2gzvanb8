import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Home, PenTool as Tool, Car, Coffee } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white md:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-800">Canadian Home Supply</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/vehicles" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
              <Car className="mr-1 h-5 w-5" />
              <span>Vehicles</span>
            </Link>
            <Link to="/home-kitchen" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
              <Coffee className="mr-1 h-5 w-5" />
              <span>Home & Kitchen</span>
            </Link>
            <Link to="/hardware-tools" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
              <Tool className="mr-1 h-5 w-5" />
              <span>Hardware & Tools</span>
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..."
                className="py-2 pl-10 pr-4 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="text-gray-700 hover:text-red-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-red-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-2 px-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            <Link 
              to="/vehicles" 
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Car className="mr-3 h-5 w-5" />
              <span>Vehicles</span>
            </Link>
            <Link 
              to="/home-kitchen" 
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Coffee className="mr-3 h-5 w-5" />
              <span>Home & Kitchen</span>
            </Link>
            <Link 
              to="/hardware-tools" 
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Tool className="mr-3 h-5 w-5" />
              <span>Hardware & Tools</span>
            </Link>
            <div className="flex px-4 py-3 space-x-4">
              <button className="flex items-center text-gray-700">
                <User className="mr-1 h-5 w-5" />
                <span>Account</span>
              </button>
              <button className="flex items-center text-gray-700">
                <ShoppingCart className="mr-1 h-5 w-5" />
                <span>Cart</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;