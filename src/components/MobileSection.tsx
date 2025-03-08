import React, { useState } from 'react';
import { Smartphone, Wifi, Signal, Globe, Clock, AlertCircle, Check, X, Zap, Tag } from 'lucide-react';

// Enhanced mobile network providers with more detailed information
const mobileProviders = [
  {
    id: 'vodafone',
    name: 'Vodafone',
    logo: '/logos/vodafone.svg',
    color: 'red',
    description: 'One of the UK\'s largest networks with extensive coverage and international roaming options.',
    coverage: '99% of UK population (4G)',
    studentDiscount: '20% off selected plans with TOTUM/NUS card',
    plans: [
      { name: 'Basics', data: '5GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£10/month', contract: '30 days' },
      { name: 'Standard', data: '30GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£15/month', contract: '30 days' },
      { name: 'Unlimited', data: 'Unlimited', minutes: 'Unlimited', texts: 'Unlimited', price: '£25/month', contract: '30 days' }
    ],
    pros: [
      'Excellent UK coverage',
      'Good international roaming options',
      'Reliable service in urban areas',
      'Student discounts available',
      'Flexible contract options'
    ],
    cons: [
      'More expensive than some competitors',
      'Customer service can be hit or miss',
      'Coverage may be limited in rural areas'
    ],
    bestFor: 'Students who need reliable UK coverage and travel internationally'
  },
  {
    id: 'three',
    name: 'Three',
    logo: '/logos/three.svg',
    color: 'indigo',
    description: 'Known for generous data allowances and "Go Roam" international roaming in 71 destinations.',
    coverage: '99.8% of UK population (4G)',
    studentDiscount: '£10 off/month on selected plans',
    plans: [
      { name: 'Essential', data: '1GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£5/month', contract: '24 months' },
      { name: 'Advanced', data: '100GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£16/month', contract: '24 months' },
      { name: 'Unlimited', data: 'Unlimited', minutes: 'Unlimited', texts: 'Unlimited', price: '£20/month', contract: '24 months' }
    ],
    pros: [
      'Excellent value for heavy data users',
      'Free roaming in many countries',
      'Unlimited plans with no speed caps',
      'Good 5G rollout in major cities',
      'Competitive pricing'
    ],
    cons: [
      'Coverage can be patchy in rural areas',
      'Indoor reception sometimes poor',
      'Longer minimum contracts on best deals'
    ],
    bestFor: 'Data-hungry students who travel to Europe and beyond'
  },
  {
    id: 'o2',
    name: 'O2',
    logo: '/logos/o2.svg',
    color: 'blue',
    description: 'Popular network with O2 Priority perks including early access to concert tickets and exclusive deals.',
    coverage: '99% of UK population (4G)',
    studentDiscount: '20% off Airtime Plans with UNiDAYS',
    plans: [
      { name: 'Small', data: '5GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£12/month', contract: '30 days' },
      { name: 'Medium', data: '30GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£18/month', contract: '30 days' },
      { name: 'Large', data: 'Unlimited', minutes: 'Unlimited', texts: 'Unlimited', price: '£25/month', contract: '30 days' }
    ],
    pros: [
      'O2 Priority app with exclusive offers and presale tickets',
      'Flexible plans with data rollover',
      'Good UK coverage',
      'Free EU roaming on selected plans',
      'Excellent customer service'
    ],
    cons: [
      'Not always the cheapest option',
      'Some plans have speed restrictions',
      'International roaming outside EU can be expensive'
    ],
    bestFor: 'Students who value perks and attend lots of events/concerts'
  },
  {
    id: 'giffgaff',
    name: 'Giffgaff',
    logo: '/logos/giffgaff.svg',
    color: 'orange',
    description: 'Flexible network with no contracts, running on the O2 network. Popular for its "goodybags" that can be changed monthly.',
    coverage: '99% of UK population (uses O2 network)',
    studentDiscount: 'No specific student discount, but competitive pricing for all',
    plans: [
      { name: 'Golden Goodybag', data: '15GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£10/month', contract: 'No contract' },
      { name: 'Golden Goodybag', data: '30GB', minutes: 'Unlimited', texts: 'Unlimited', price: '£15/month', contract: 'No contract' },
      { name: 'Golden Goodybag', data: 'Unlimited', minutes: 'Unlimited', texts: 'Unlimited', price: '£20/month', contract: 'No contract' }
    ],
    pros: [
      'No contracts - change or cancel anytime',
      'Very competitive pricing',
      'Uses O2 network for good coverage',
      'Community-based support',
      'Easy to set up online'
    ],
    cons: [
      'No physical stores for support',
      'Limited international roaming options',
      'No handset financing options',
      'Customer service can be slower than major networks'
    ],
    bestFor: 'Budget-conscious students who want flexibility without contracts'
  }
];

// Tips for choosing a mobile plan
const mobileChoiceTips = [
  {
    title: 'Check Coverage',
    description: 'Before choosing a network, check their coverage map for your university area and accommodation. Signal strength can vary significantly between providers.',
    icon: Signal
  },
  {
    title: 'Consider Data Needs',
    description: 'Most students use 10-20GB per month. If you stream a lot of video or rarely use WiFi, consider unlimited plans. If you\'re mostly on university WiFi, a smaller plan may suffice.',
    icon: Wifi
  },
  {
    title: 'Contract Length',
    description: 'Shorter contracts (30 days) offer flexibility but may cost more monthly. Longer contracts (12-24 months) usually offer better value but less flexibility.',
    icon: Clock
  },
  {
    title: 'International Usage',
    description: 'If you plan to travel or call home often, check international roaming costs and international calling rates. Some networks offer better international packages than others.',
    icon: Globe
  },
  {
    title: 'Student Discounts',
    description: 'Many networks offer student discounts through TOTUM, UNiDAYS or Student Beans. Always check if your student status can get you a better deal.',
    icon: Tag
  },
  {
    title: 'Consider MVNOs',
    description: 'Mobile Virtual Network Operators like Giffgaff, Lebara, and VOXI use the major networks\' infrastructure but often at lower prices with more flexibility.',
    icon: Zap
  }
];

const MobileSection: React.FC = () => {
  const [activeProvider, setActiveProvider] = useState('vodafone');
  const selectedProvider = mobileProviders.find(provider => provider.id === activeProvider) || mobileProviders[0];

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 md:px-8">
      {/* Hero section with enhanced visual appeal */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
              stroke="white" strokeWidth="100" fill="none" />
          </svg>
        </div>
        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">UK Mobile Networks Guide</h2>
              <p className="text-lg text-blue-50 max-w-3xl">
                Navigating UK mobile networks can be confusing for international students.
                Find the best plans with student discounts, compare coverage, and understand contract options.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Smartphone className="mr-1 h-4 w-4" /> SIM-Only Deals
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Signal className="mr-1 h-4 w-4" /> Network Coverage
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Wifi className="mr-1 h-4 w-4" /> Data Plans
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <Smartphone className="h-32 w-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick guide for international students */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Getting Started with UK Mobile Networks
          </h3>

          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-100 dark:border-blue-800/30">
              <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">What You Need to Know</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">UK mobile networks use <strong>GSM technology</strong> (same as most of Europe and Asia)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">You'll need <strong>identification</strong> (passport) and UK address to get a contract</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300"><strong>SIM-only deals</strong> are usually the best option for students (bring your own phone)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Check if your phone is <strong>unlocked</strong> before arriving in the UK</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Most plans include <strong>unlimited calls and texts</strong> - data is the main differentiator</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Pay-As-You-Go vs. Contract
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Pay-As-You-Go (PAYG)</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">No credit check, flexible, can be topped up as needed. Good for short stays or uncertain usage patterns.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Monthly Contract</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Better value for regular users, consistent monthly cost, often includes more data. May require credit check.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5 border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <X className="h-5 w-5 text-red-500 mr-2" />
                  Common Pitfalls to Avoid
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Signing long contracts if you're staying less than 12 months</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Not checking coverage in your specific area</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Overlooking international calling costs if you call home often</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Paying for more data than you need if you mostly use university WiFi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network provider comparison */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Network Provider Comparison
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">Popular Networks</h4>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {mobileProviders.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => setActiveProvider(provider.id)}
                    className={`w-full flex items-center p-4 transition-colors ${activeProvider === provider.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                      }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${activeProvider === provider.id
                      ? 'bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}>
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{provider.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 sm:p-10">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl ${selectedProvider.color === 'red'
                    ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    : selectedProvider.color === 'blue'
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : selectedProvider.color === 'indigo'
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                        : 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                    }`}>
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">{selectedProvider.name}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedProvider.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Coverage</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedProvider.coverage}</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Student Discount</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedProvider.studentDiscount}</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedProvider.bestFor}</p>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Popular Plans
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Plan</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Data</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Minutes & Texts</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Price</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Contract</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProvider.plans.map((plan, index) => (
                          <tr key={index} className={index < selectedProvider.plans.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""}>
                            <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{plan.name}</td>
                            <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{plan.data}</td>
                            <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{plan.minutes}</td>
                            <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{plan.price}</td>
                            <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{plan.contract}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {selectedProvider.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400">
                              <Check className="h-3 w-3" />
                            </div>
                          </div>
                          <p className="ml-3 text-gray-600 dark:text-gray-300">{pro}</p>
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
                      {selectedProvider.cons.map((con, index) => (
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

      {/* Tips for choosing a mobile plan */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Tips for Choosing the Right Mobile Plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileChoiceTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800/30 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl">
                    <tip.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {tip.title}
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
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
                If you're bringing your phone from abroad, make sure it's unlocked before arriving in the UK. Some networks may require a UK bank account for contract plans, so consider starting with a pay-as-you-go SIM until you've set up your banking. Most universities have good WiFi coverage, which can reduce your mobile data needs significantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;