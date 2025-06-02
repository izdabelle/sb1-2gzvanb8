import React from 'react';
import { Car, Coffee, PenTool as Tool } from 'lucide-react';
import CategoryCard from '../ui/CategoryCard';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 'vehicles',
      title: 'Vehicles',
      description: 'Find cars, trucks, SUVs, and vehicle accessories from Canadian dealers.',
      icon: <Car className="h-6 w-6" />,
      imageUrl: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkTo: '/vehicles'
    },
    {
      id: 'home-kitchen',
      title: 'Home & Kitchen',
      description: 'Discover appliances, furniture, and decor for every room in your home.',
      icon: <Coffee className="h-6 w-6" />,
      imageUrl: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkTo: '/home-kitchen'
    },
    {
      id: 'hardware-tools',
      title: 'Hardware & Tools',
      description: 'Shop power tools, hand tools, and hardware for all your DIY projects.',
      icon: <Tool className="h-6 w-6" />,
      imageUrl: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkTo: '/hardware-tools'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop Our Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of products across various categories, all from Canadian-owned businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              imageUrl={category.imageUrl}
              linkTo={category.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;