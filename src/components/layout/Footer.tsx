import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  MapIcon,
  Leaf
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              Canadian Home Supply proudly features products exclusively from Canadian-owned businesses, supporting local communities and economy.
            </p>
            <div className="flex items-center space-x-2 text-red-400">
              <Leaf className="h-5 w-5" />
              <span className="font-medium">Proudly Canadian</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vehicles" className="text-gray-300 hover:text-white transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link to="/home-kitchen" className="text-gray-300 hover:text-white transition-colors">
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link to="/hardware-tools" className="text-gray-300 hover:text-white transition-colors">
                  Hardware & Tools
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Maple Street, Toronto, ON M5V 2T6
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-gray-300">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-gray-300">
                  info@canadianhomesupply.ca
                </span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Canadian Home Supply. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;