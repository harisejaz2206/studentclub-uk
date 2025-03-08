import React from 'react';
import { Train, Bus, Navigation } from 'lucide-react';
import { resources } from '../data/resources';

interface TransportCard {
  name: string;
  description: string;
  discount?: string;
  features: string[];
  rating: number;
}

const TransportationSection: React.FC = () => {
  const transportResources = resources.filter(r => r.category === 'transport');

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">UK Transportation Guide</h2>
        <p className="text-gray-600 dark:text-gray-300">Navigate the UK's extensive public transport network with student-friendly options.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Train className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Rail Travel</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Save up to 1/3 on rail fares with a 16-25 Railcard.</p>
            <span className="student-discount-badge">Student Discount Available</span>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Bus className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Bus Services</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Local and national bus services with student passes.</p>
            <span className="student-discount-badge">Student Passes Available</span>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Navigation className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Journey Planning</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Apps and tools for planning your journeys efficiently.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Popular Transport Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportResources.map((resource) => (
            <div key={resource.id} className="category-card">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{resource.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                {resource.studentDiscount && (
                  <span className="student-discount-badge mb-4">{resource.studentDiscount}</span>
                )}
                <ul className="mt-4 space-y-2">
                  {resource.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportationSection;