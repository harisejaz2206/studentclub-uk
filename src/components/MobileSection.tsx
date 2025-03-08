import React from 'react';
import { Smartphone, Wifi, Signal } from 'lucide-react';

const MobileSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mobile Networks Guide</h2>
        <p className="text-gray-600 dark:text-gray-300">Find the best mobile plans and student-exclusive offers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Smartphone className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">SIM Only Deals</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Flexible plans with no long-term commitment.</p>
            <span className="student-discount-badge">Student Offers Available</span>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Signal className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Network Coverage</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Compare coverage and speeds in your area.</p>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Wifi className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Data Plans</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Find the right data allowance for your needs.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 category-card p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Plan Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Provider</th>
                <th className="text-left py-3 px-4">Data</th>
                <th className="text-left py-3 px-4">Minutes & Texts</th>
                <th className="text-left py-3 px-4">Student Offer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Vodafone</td>
                <td className="py-3 px-4">Unlimited</td>
                <td className="py-3 px-4">Unlimited</td>
                <td className="py-3 px-4">20% off</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Three</td>
                <td className="py-3 px-4">100GB</td>
                <td className="py-3 px-4">Unlimited</td>
                <td className="py-3 px-4">£10 off/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;