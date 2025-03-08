import React from 'react';
import { ShoppingCart, Tag, Percent } from 'lucide-react';

const GroceriesSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Grocery Guide</h2>
        <p className="text-gray-600 dark:text-gray-300">Save money on your weekly shop with student discounts and loyalty programs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <ShoppingCart className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Supermarket Deals</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Weekly offers and student discounts at major supermarkets.</p>
            <span className="student-discount-badge">Student Offers Available</span>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Tag className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Loyalty Cards</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Compare loyalty programs and maximize your rewards.</p>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Percent className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Budget Tips</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Smart shopping tips and money-saving strategies.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="category-card p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Top Loyalty Programs</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mt-2 mr-2"></span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Tesco Clubcard</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Points worth up to 3x value with partners</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mt-2 mr-2"></span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Sainsbury's Nectar</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Personalized offers and bonus points events</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="category-card p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Money-Saving Tips</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mt-2 mr-2"></span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Shop in the Evening</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Find reduced items and clearance deals</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mt-2 mr-2"></span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Buy Non-Branded</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Save up to 30% with store-brand products</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroceriesSection;