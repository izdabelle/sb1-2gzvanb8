import React from 'react';
import { MapPin, Check, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const CanadianBusinessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Leaf className="h-4 w-4 mr-1" />
              <span>Supporting Local</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Proudly Supporting Canadian-Owned Businesses
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              At Canadian Home Supply, we exclusively partner with Canadian-owned businesses 
              to provide you with quality products while supporting local economies across the country.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mt-0.5">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Supporting Local Communities</h3>
                  <p className="text-gray-600">
                    Your purchase helps create jobs and strengthen local economies across Canada.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mt-0.5">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Reducing Environmental Impact</h3>
                  <p className="text-gray-600">
                    Products made closer to home mean fewer emissions from long-distance shipping.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mt-0.5">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Quality and Craftsmanship</h3>
                  <p className="text-gray-600">
                    Canadian businesses are known for their attention to detail and high-quality products.
                  </p>
                </div>
              </div>
            </div>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Learn More About Our Mission
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600 rounded-full opacity-20"></div>
            <img 
              src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Canadian businesses" 
              className="rounded-lg shadow-xl relative z-10 w-full h-auto"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center space-x-2 z-20">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-800">Made in Canada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanadianBusinessSection;