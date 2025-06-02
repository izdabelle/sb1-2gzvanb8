export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  // Vehicles
  {
    id: 'v1',
    name: 'Maple Leaf SUV - Canadian Built Crossover',
    description: 'A spacious family SUV built with Canadian engineering and durability to handle all seasons.',
    price: 35999.99,
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Vehicles',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'v2',
    name: 'Northern Explorer Truck - Heavy Duty Pickup',
    description: 'Powerful Canadian-made pickup truck with excellent towing capacity and rugged all-terrain capabilities.',
    price: 45750.00,
    image: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Vehicles',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'v3',
    name: 'Urban Commuter - Compact Electric Vehicle',
    description: 'Eco-friendly Canadian electric car perfect for city driving with excellent range and low operating costs.',
    price: 32500.00,
    image: 'https://images.pexels.com/photos/14186246/pexels-photo-14186246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Vehicles',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'v4',
    name: 'Adventure Seeker - All-Terrain Vehicle',
    description: 'Durable ATV made for Canadian wilderness adventures with powerful engine and robust construction.',
    price: 11999.99,
    image: 'https://images.pexels.com/photos/17119574/pexels-photo-17119574/free-photo-of-atv-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Vehicles',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'v5',
    name: 'Winter Warrior - Snowmobile',
    description: 'High-performance snowmobile designed for Canadian winters with excellent handling and reliability.',
    price: 15750.00,
    image: 'https://images.pexels.com/photos/7237429/pexels-photo-7237429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Vehicles',
    rating: 4.9,
    inStock: true
  },
  
  // Home & Kitchen
  {
    id: 'hk1',
    name: 'Canadian Pine Dining Table Set',
    description: 'Beautiful handcrafted dining table with 6 chairs made from sustainable Canadian pine wood.',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'hk2',
    name: 'Maple Leaf Smart Refrigerator',
    description: 'Energy-efficient smart refrigerator with ample storage and advanced cooling technology.',
    price: 2499.99,
    image: 'https://images.pexels.com/photos/5825578/pexels-photo-5825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'hk3',
    name: 'Canadian Comfort Sectional Sofa',
    description: 'Luxurious and comfortable sectional sofa made with premium Canadian materials and craftsmanship.',
    price: 1899.99,
    image: 'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'hk4',
    name: 'Northern Lights Bedding Set - Queen',
    description: 'Premium quality bedding set with Canadian-inspired design and comfortable, durable materials.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'hk5',
    name: 'Whistler Pro Stand Mixer',
    description: 'Powerful stand mixer for all your baking needs with multiple attachments and Canadian design.',
    price: 399.99,
    image: 'https://images.pexels.com/photos/4193058/pexels-photo-4193058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.9,
    inStock: true
  },
  
  // Hardware & Tools
  {
    id: 'ht1',
    name: 'Canadian Craftsman Power Drill Set',
    description: 'Professional-grade power drill set with multiple drill bits and accessories for any project.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Hardware & Tools',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'ht2',
    name: 'True North Tool Belt',
    description: 'Durable leather tool belt with multiple pockets, perfect for professionals and DIY enthusiasts.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Hardware & Tools',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'ht3',
    name: 'Maple Leaf Premium Circular Saw',
    description: 'High-performance circular saw with precision cutting and safety features for demanding projects.',
    price: 179.99,
    image: 'https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Hardware & Tools',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'ht4',
    name: 'Canadian Homeowner Tool Kit - 150 Pieces',
    description: 'Comprehensive tool kit with everything needed for home repairs and projects in a durable case.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/4116218/pexels-photo-4116218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Hardware & Tools',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'ht5',
    name: 'Northern Logger Chainsaw',
    description: 'Powerful chainsaw designed for Canadian forestry with excellent cutting performance and durability.',
    price: 329.99,
    image: 'https://images.pexels.com/photos/5088738/pexels-photo-5088738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Hardware & Tools',
    rating: 4.8,
    inStock: true
  }
];