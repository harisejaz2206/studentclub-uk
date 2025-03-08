import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Train,
  CreditCard,
  ShoppingCart,
  Smartphone,
  Home,
  FileText,
  Landmark,
  Phone,
  Heart
} from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import '../styles/background-patterns.css'; // Import the background pattern CSS

// Category data with added color properties for UK-inspired theme
const categories = [
  {
    title: 'Transportation',
    description: 'Find the best ways to get around the UK with student discounts. Compare train, bus, and local transport options.',
    icon: Train,
    path: '/transportation',
    color: 'navy' as const // Type assertion to ensure correct type
  },
  {
    title: 'Banking',
    description: 'Compare student-friendly UK bank accounts and services. Find the best options for international transfers.',
    icon: CreditCard,
    path: '/banking',
    color: 'red' as const // Type assertion to ensure correct type
  },
  {
    title: 'Groceries',
    description: 'Discover supermarket deals and loyalty programs. Save money on your weekly shopping with student discounts.',
    icon: ShoppingCart,
    path: '/groceries',
    color: 'navy' as const // Type assertion to ensure correct type
  },
  {
    title: 'Mobile Networks',
    description: 'Compare phone plans and find student-exclusive offers. Get the best value for calls, texts, and data.',
    icon: Smartphone,
    path: '/mobile',
    color: 'red' as const // Type assertion to ensure correct type
  },
  {
    title: 'Housing',
    description: 'Find student accommodation and housing resources. Compare options from university halls to private rentals.',
    icon: Home,
    path: '/housing',
    color: 'navy' as const // Type assertion to ensure correct type
  }
];

// Resource items with icons
const resourceItems = [
  { title: 'Student Visa Guide', icon: FileText },
  { title: 'UK Banking Basics', icon: Landmark },
  { title: 'SIM Card Comparison', icon: Phone },
  { title: 'NHS Registration', icon: Heart }
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none" aria-hidden="true"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Hero section with enhanced typography and spacing */}
        <div className="text-center mb-20">
          <div className="inline-block mb-3 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              For International Students
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Welcome to the UK{' '}
            <span className="bg-gradient-to-r from-navy-600 to-red-600 bg-clip-text text-transparent">
              Student Guide
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your complete resource for settling into student life in the United Kingdom.
            Find the best deals, compare services, and make informed decisions.
          </p>

          {/* Quick action buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              How It Works
            </button>
            <button
              onClick={() => navigate('/universities')}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white font-medium shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Find Your University
            </button>
          </div>
        </div>

        {/* Category section with improved grid layout */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left">
            Essential Student Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                color={category.color}
                onClick={() => navigate(category.path)}
              />
            ))}
          </div>
        </div>

        {/* New section: Student testimonials or featured resources */}
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800/50 p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              New to the UK?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Check out our most popular resources for international students
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceItems.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transform hover:-translate-y-0.5"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 mr-3">
                    <item.icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer section with additional resources */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              Helping international students navigate UK services since 2023
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-navy-400 transition-colors">
                Contact Us
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-navy-400 transition-colors">
                About
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-navy-600 dark:hover:text-navy-400 transition-colors">
                Privacy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;