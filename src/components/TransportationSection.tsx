import React, { useState } from 'react';
import { Train, Bus, Navigation, MapPin, Clock, CreditCard, Ticket, AlertCircle } from 'lucide-react';
import { resources } from '../data/resources';

interface TransportCard {
  name: string;
  description: string;
  discount?: string;
  features: string[];
  rating: number;
}

// Enhanced transport options with more detailed information
const transportOptions = [
  {
    id: 'rail',
    name: 'Rail Travel',
    icon: Train,
    color: 'navy',
    description: 'The UK has an extensive rail network connecting all major cities and many smaller towns. Trains are generally the fastest way to travel between cities.',
    discount: 'Save 1/3 on rail fares with a 16-25 Railcard (£30/year)',
    tips: [
      'Book tickets 12+ weeks in advance for the best prices',
      'Consider "split ticketing" for cheaper fares on longer journeys',
      'Off-peak travel (after 9:30am) is significantly cheaper'
    ],
    providers: [
      { name: 'Trainline', discount: '16-25 Railcard integration' },
      { name: 'National Rail', discount: 'Student discounts available' },
      { name: 'LNER', discount: 'Student fares with valid ID' }
    ]
  },
  {
    id: 'bus',
    name: 'Bus Services',
    icon: Bus,
    color: 'red',
    description: 'Buses are often the most economical way to travel within cities and to nearby towns. Most universities have dedicated bus services.',
    discount: 'Student passes available with up to 30% discount on regular fares',
    tips: [
      'Many cities offer day/week passes that are cheaper than single tickets',
      'Download the local bus app for real-time updates',
      'University ID often qualifies for discounted fares without a separate pass'
    ],
    providers: [
      { name: 'National Express', discount: 'Young Persons Coachcard - 1/3 off' },
      { name: 'Megabus', discount: 'Fares from £1 when booked early' },
      { name: 'First Bus', discount: 'Student term passes' }
    ]
  },
  {
    id: 'planning',
    name: 'Journey Planning',
    icon: Navigation,
    color: 'green',
    description: 'Planning your journey efficiently can save time and money, especially in complex urban transport networks like London.',
    tips: [
      'Google Maps works well but specialized apps often have better local data',
      'Check for engineering works before weekend travel',
      'Consider cycling for short urban journeys (many cities have bike sharing)'
    ],
    providers: [
      { name: 'Citymapper', discount: 'Free with premium options' },
      { name: 'Google Maps', discount: 'Free' },
      { name: 'Trainline', discount: 'Journey planning with fare comparison' }
    ]
  }
];

const TransportationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rail');
  const transportResources = resources.filter(r => r.category === 'transport');
  const activeOption = transportOptions.find(option => option.id === activeTab) || transportOptions[0];

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 md:px-8">
      {/* Hero section with enhanced visual appeal */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-600 to-navy-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
              stroke="white" strokeWidth="100" fill="none" />
          </svg>
        </div>
        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">UK Transportation Guide</h2>
              <p className="text-lg text-navy-50 max-w-3xl">
                The UK has one of the most comprehensive public transport networks in the world.
                As an international student, understanding your options can save you significant time and money.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <CreditCard className="mr-1 h-4 w-4" /> Student Discounts
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <MapPin className="mr-1 h-4 w-4" /> Nationwide Coverage
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Clock className="mr-1 h-4 w-4" /> 24/7 Services
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <Train className="h-32 w-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Transport options tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">Transport Options</h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {transportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  className={`w-full flex items-center p-4 transition-colors ${activeTab === option.id
                    ? 'bg-navy-50 dark:bg-navy-900/30 text-navy-600 dark:text-navy-400'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                    }`}
                >
                  <div className={`p-2 rounded-lg mr-3 ${activeTab === option.id
                    ? 'bg-navy-100 dark:bg-navy-800/50 text-navy-600 dark:text-navy-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                    <option.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 sm:p-10">
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl ${activeOption.color === 'navy'
                  ? 'bg-navy-50 dark:bg-navy-900/30 text-navy-600 dark:text-navy-400'
                  : activeOption.color === 'red'
                    ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  }`}>
                  <activeOption.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">{activeOption.name}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                {activeOption.description}
              </p>

              {activeOption.discount && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Ticket className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Student Discount</h4>
                      <p className="mt-1 text-sm text-green-700 dark:text-green-400">{activeOption.discount}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeOption.tips && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Pro Tips</h4>
                  <ul className="space-y-2">
                    {activeOption.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${activeOption.color === 'navy'
                            ? 'bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-400'
                            : activeOption.color === 'red'
                              ? 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400'
                              : 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400'
                            }`}>
                            <span className="text-xs font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600 dark:text-gray-300">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeOption.providers && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Providers</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeOption.providers.map((provider, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-colors"
                      >
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{provider.name}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{provider.discount}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Popular transport apps section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Essential Transport Apps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transportResources.map((resource) => (
                <div
                  key={resource.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-navy-200 dark:hover:border-navy-800/30 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-navy-50 dark:bg-navy-900/30 p-3 rounded-xl">
                        <Train className="h-6 w-6 text-navy-600 dark:text-navy-400" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors">
                          {resource.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                            {resource.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>

                    {resource.studentDiscount && (
                      <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                        <Ticket className="mr-1 h-3.5 w-3.5" />
                        {resource.studentDiscount}
                      </div>
                    )}

                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</h5>
                      <ul className="space-y-1">
                        {resource.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-navy-600 dark:bg-navy-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-navy-600 dark:text-navy-400 hover:text-navy-700 dark:hover:text-navy-300 transition-colors flex items-center"
                      >
                        Visit Website
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {resource.category === 'transport' ? 'Transport' : resource.category}
                      </div>
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
                    Most UK transport services accept contactless payment cards. If your international card charges foreign transaction fees, consider getting a UK bank account or a travel card to save on fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationSection;