import React from 'react';
import { CreditCard, Wallet, ArrowLeftRight } from 'lucide-react';

const BankingSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Banking Guide</h2>
        <p className="text-gray-600 dark:text-gray-300">Find the best student bank accounts and financial services in the UK.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <CreditCard className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Student Accounts</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Compare student accounts with overdraft facilities and perks.</p>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <Wallet className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Digital Banking</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Modern banking apps with instant notifications and budgeting tools.</p>
          </div>
        </div>

        <div className="category-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50">
                <ArrowLeftRight className="h-6 w-6 text-navy-600 dark:text-navy-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">International Transfers</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Send and receive money internationally at better rates.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 category-card p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Account Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">Bank</th>
                <th className="text-left py-3 px-4">Overdraft</th>
                <th className="text-left py-3 px-4">Perks</th>
                <th className="text-left py-3 px-4">International Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Monzo</td>
                <td className="py-3 px-4">Up to £2000</td>
                <td className="py-3 px-4">Free international withdrawals</td>
                <td className="py-3 px-4">No fees up to £200/month</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-4">Starling</td>
                <td className="py-3 px-4">Up to £1000</td>
                <td className="py-3 px-4">No overseas fees</td>
                <td className="py-3 px-4">No fees worldwide</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BankingSection;