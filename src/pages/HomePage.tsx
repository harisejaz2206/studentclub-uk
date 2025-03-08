import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, CreditCard, ShoppingCart, Smartphone, Home } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';

const categories = [
  {
    title: 'Transportation',
    description: 'Find the best ways to get around the UK with student discounts. Compare train, bus, and local transport options.',
    icon: Train,
    path: '/transportation'
  },
  {
    title: 'Banking',
    description: 'Compare student-friendly UK bank accounts and services. Find the best options for international transfers.',
    icon: CreditCard,
    path: '/banking'
  },
  {
    title: 'Groceries',
    description: 'Discover supermarket deals and loyalty programs. Save money on your weekly shopping with student discounts.',
    icon: ShoppingCart,
    path: '/groceries'
  },
  {
    title: 'Mobile Networks',
    description: 'Compare phone plans and find student-exclusive offers. Get the best value for calls, texts, and data.',
    icon: Smartphone,
    path: '/mobile'
  },
  {
    title: 'Housing',
    description: 'Find student accommodation and housing resources. Compare options from university halls to private rentals.',
    icon: Home,
    path: '/housing'
  }
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Welcome to the UK{' '}
          <span className="bg-gradient-to-r from-navy-600 to-red-600 bg-clip-text text-transparent">
            Student Guide
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Your complete resource for settling into student life in the United Kingdom. 
          Find the best deals, compare services, and make informed decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            description={category.description}
            icon={category.icon}
            onClick={() => navigate(category.path)}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;