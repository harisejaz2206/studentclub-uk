import React from 'react';
import { Home, Building, MapPin } from 'lucide-react';

const HousingSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Housing Guide</h2>
        <p className="text-gray-600 dark:text-gray-300">Find the perfect student accommodation with our comprehensive guide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Building className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">University Halls</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">On-campus accommodation options and applications.</p>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Home className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Private Rentals</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Find house shares and private student accommodation.</p>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <MapPin className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Area Guides</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Compare different student areas and neighborhoods.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="category-card p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Housing Checklist</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mt-2 mr-2"></span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Contract Review</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Understanding your tenancy agreement</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mt-2 mr-2"></span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Deposit Protection</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ensuring your deposit is properly protected</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="category-card p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Cost Comparison</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">University Halls</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">£120-180 per week (including bills)</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Private Halls</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">£150-250 per week (including bills)</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">House Share</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">£90-150 per week (excluding bills)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingSection;