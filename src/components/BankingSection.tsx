import React, { useState } from 'react';
import { CreditCard, Wallet, ArrowLeftRight, Building, Smartphone, Shield, AlertCircle, Check, X } from 'lucide-react';

// Enhanced bank account options with more detailed information
const bankAccounts = [
  {
    id: 'student',
    name: 'Monzo',
    logo: '/logos/monzo.svg',
    type: 'Digital Bank',
    description: 'Popular digital bank with easy account opening for international students.',
    overdraft: 'Up to £2,000 (subject to status)',
    internationalFees: 'No fees up to £200/month, 3% after',
    perks: [
      'No UK address required to open',
      'Free card delivery',
      'Instant spending notifications',
      'Budgeting tools',
      'Split bills with friends'
    ],
    cons: [
      'No physical branches',
      'Cash deposits limited'
    ],
    studentOffer: 'No specific student account, but popular with students for ease of use',
    rating: 4.8,
    bestFor: 'International students who need a quick account setup'
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    logo: '/logos/hsbc.svg',
    type: 'Traditional Bank',
    description: 'Global bank with specific international student accounts.',
    overdraft: 'Up to £1,000 interest-free',
    internationalFees: 'Free international transfers between HSBC accounts',
    perks: [
      'Global presence',
      'Dedicated international student account',
      'Mobile banking app',
      'Physical branches',
      'Interest-free overdraft'
    ],
    cons: [
      'Requires UK address',
      'Account opening can take longer',
      'May need appointment'
    ],
    studentOffer: 'International Student Bank Account with £50 cashback',
    rating: 4.2,
    bestFor: 'Students with existing HSBC relationship'
  },
  {
    id: 'santander',
    name: 'Santander',
    logo: '/logos/santander.svg',
    type: 'Traditional Bank',
    description: 'Popular student account with generous perks.',
    overdraft: 'Up to £1,500 interest-free',
    internationalFees: '£0 for ATM withdrawals in Santander ATMs worldwide',
    perks: [
      'Free 4-year railcard worth £90',
      'Interest on positive balances',
      'Mobile banking app',
      'Physical branches',
      'Cashback offers'
    ],
    cons: [
      'Requires UK address',
      'Need to be on eligible course'
    ],
    studentOffer: 'Free 4-year 16-25 Railcard + interest-free overdraft',
    rating: 4.5,
    bestFor: 'Students who travel by train frequently'
  },
  {
    id: 'starling',
    name: 'Starling',
    logo: '/logos/starling.svg',
    type: 'Digital Bank',
    description: 'Award-winning digital bank with no foreign transaction fees.',
    overdraft: 'Up to £1,000 (subject to status)',
    internationalFees: 'No fees worldwide',
    perks: [
      'No fees abroad',
      'Quick account opening',
      'Saving spaces',
      'Round-up savings',
      'Joint accounts available'
    ],
    cons: [
      'No physical branches',
      'No specific student perks'
    ],
    studentOffer: 'No specific student account, but excellent for travel',
    rating: 4.7,
    bestFor: 'Students who travel internationally often'
  }
];

// Enhanced money transfer services
const transferServices = [
  {
    name: 'Wise',
    description: 'Send money abroad at real exchange rates with low fees.',
    features: [
      'Real exchange rates',
      'Transparent fees',
      'Fast transfers',
      'Multi-currency account available'
    ],
    bestFor: 'Regular international transfers',
    savingsExample: 'Save up to 6x compared to banks'
  },
  {
    name: 'Western Union',
    description: 'Global money transfer service with cash pickup options.',
    features: [
      'Cash pickup available',
      'Transfer to bank accounts',
      'Available in 200+ countries',
      'Online and in-person services'
    ],
    bestFor: 'Sending money to countries with limited banking',
    savingsExample: 'Special rates for first-time users'
  },
  {
    name: 'Revolut',
    description: 'Digital banking alternative with competitive exchange rates.',
    features: [
      'Multi-currency accounts',
      'Virtual cards',
      'Cryptocurrency exchange',
      'Budgeting tools'
    ],
    bestFor: 'Students needing multiple currencies',
    savingsExample: 'Free currency exchange up to £1,000/month'
  }
];

const BankingSection: React.FC = () => {
  const [activeBank, setActiveBank] = useState('student');
  const selectedBank = bankAccounts.find(bank => bank.id === activeBank) || bankAccounts[0];

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 md:px-8">
      {/* Hero section with enhanced visual appeal */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
              stroke="white" strokeWidth="100" fill="none" />
          </svg>
        </div>
        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">UK Student Banking Guide</h2>
              <p className="text-lg text-red-50 max-w-3xl">
                Setting up a UK bank account is essential for managing your finances as an international student.
                Find the right account with student-friendly features and international services.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <CreditCard className="mr-1 h-4 w-4" /> Student Accounts
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <ArrowLeftRight className="mr-1 h-4 w-4" /> International Transfers
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Smartphone className="mr-1 h-4 w-4" /> Mobile Banking
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <CreditCard className="h-32 w-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick setup guide for international students */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Banking Setup Guide for International Students
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Before Arrival</h4>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Research bank options and requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Prepare identification documents (passport, visa, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Consider opening a digital bank account remotely</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Upon Arrival</h4>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Obtain proof of address (university letter, tenancy agreement)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visit bank branch or complete online application</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Set up mobile banking and online access</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Getting Started</h4>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Set up direct debits for bills and rent</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Link to mobile payment apps (Apple Pay, Google Pay)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Understand overdraft terms and international transfer fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bank account comparison section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Student Bank Account Comparison
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">Compare Banks</h4>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {bankAccounts.map((bank) => (
                  <button
                    key={bank.id}
                    onClick={() => setActiveBank(bank.id)}
                    className={`w-full flex items-center p-4 transition-colors ${activeBank === bank.id
                      ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                      }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${activeBank === bank.id
                      ? 'bg-red-100 dark:bg-red-800/50 text-red-600 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}>
                      {bank.type === 'Digital Bank' ? (
                        <Smartphone className="h-5 w-5" />
                      ) : (
                        <Building className="h-5 w-5" />
                      )}
                    </div>
                    <span className="font-medium">{bank.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className={`p-3 rounded-xl ${selectedBank.type === 'Digital Bank'
                      ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      }`}>
                      {selectedBank.type === 'Digital Bank' ? (
                        <Smartphone className="h-6 w-6" />
                      ) : (
                        <Building className="h-6 w-6" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedBank.name}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{selectedBank.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(selectedBank.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">{selectedBank.rating.toFixed(1)}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedBank.description}
                </p>

                {selectedBank.studentOffer && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Student Offer</h4>
                        <p className="mt-1 text-sm text-green-700 dark:text-green-400">{selectedBank.studentOffer}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Overdraft</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedBank.overdraft}</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">International Fees</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedBank.internationalFees}</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedBank.bestFor}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {selectedBank.perks.map((perk, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400">
                              <Check className="h-3 w-3" />
                            </div>
                          </div>
                          <p className="ml-3 text-gray-600 dark:text-gray-300">{perk}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      Limitations
                    </h4>
                    <ul className="space-y-2">
                      {selectedBank.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-800/50 text-red-600 dark:text-red-400">
                              <X className="h-3 w-3" />
                            </div>
                          </div>
                          <p className="ml-3 text-gray-600 dark:text-gray-300">{con}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* International money transfer section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          International Money Transfer Options
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transferServices.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800/30 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-xl">
                    <ArrowLeftRight className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

                <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
                  Best for: {service.bestFor}
                </div>

                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-sm text-green-700 dark:text-green-400">
                  <span className="font-medium">Savings: </span>
                  {service.savingsExample}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important notice for international students */}
      <div className="p-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30 mt-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300">Important for International Students</h3>
            <div className="mt-2 text-amber-700 dark:text-amber-400">
              <p className="text-sm">
                Most UK banks will require proof of your UK address and student status. Bring your passport, visa, university acceptance letter, and proof of address to your appointment. Digital banks like Monzo and Starling often have simpler requirements and faster setup processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingSection;