import React, { useState } from 'react';
import { Home, Building, MapPin, Calendar, Shield, AlertCircle, Check, X, Zap, Wifi, Droplet, Flame } from 'lucide-react';

// Enhanced housing options with more detailed information
const housingOptions = [
  {
    id: 'university',
    name: 'University Halls',
    icon: Building,
    color: 'purple',
    description: 'University-managed accommodation typically located on or near campus. Usually the easiest option for first-year international students.',
    priceRange: '£120-180 per week',
    billsIncluded: true,
    contractLength: '40-44 weeks (academic year)',
    pros: [
      'Convenient location near campus',
      'Bills included (electricity, water, internet)',
      'Easy to make friends with other students',
      'No need for UK guarantor',
      'Support staff available',
      'Secure environment'
    ],
    cons: [
      'Can be more expensive than private rentals',
      'Limited availability - apply early',
      'Less privacy than private accommodation',
      'May need to move out during holidays',
      'Rules and restrictions on guests/parties'
    ],
    applicationTips: [
      'Apply as soon as you receive your university offer',
      'Specify preferences for room type, location, and budget',
      'Consider catered vs. self-catered options',
      'Check if specific halls are designated for international students'
    ],
    bestFor: 'First-year international students who want convenience and social opportunities'
  },
  {
    id: 'private-halls',
    name: 'Private Halls',
    icon: Building,
    color: 'blue',
    description: 'Purpose-built student accommodation operated by private companies. Similar to university halls but often with more premium facilities.',
    priceRange: '£150-250 per week',
    billsIncluded: true,
    contractLength: '44-51 weeks',
    pros: [
      'Modern facilities (often include gym, cinema room, study spaces)',
      'All bills included',
      'No UK guarantor required (with advance payment)',
      'Social events organized',
      'Security and reception services',
      'Often in central locations'
    ],
    cons: [
      'More expensive than other options',
      'May be further from campus',
      'Can feel impersonal',
      'Limited cooking facilities in some developments',
      'Strict rules on noise and guests'
    ],
    applicationTips: [
      'Book early for the best rooms and locations',
      'Check reviews from current/past residents',
      'Visit in person if possible before committing',
      'Ask about additional fees (cleaning, security deposits)'
    ],
    bestFor: 'Students who want convenience and luxury facilities with minimal hassle'
  },
  {
    id: 'house-share',
    name: 'House/Flat Share',
    icon: Home,
    color: 'green',
    description: 'Renting a room in a shared house or flat with other students. Usually the most economical option with more independence.',
    priceRange: '£90-150 per week (excluding bills)',
    billsIncluded: false,
    contractLength: '12 months (sometimes 6 months)',
    pros: [
      'Usually cheaper than halls',
      'More independence and privacy',
      'Choose your own housemates',
      'More space and homely environment',
      'No restrictions on guests/cooking',
      'Live in residential areas'
    ],
    cons: [
      'Need to pay bills separately',
      'Usually requires UK guarantor or larger deposit',
      'Responsible for cleaning and maintenance',
      'Potential housemate conflicts',
      'May need to find replacement tenants if leaving early'
    ],
    applicationTips: [
      'Start looking 2-3 months before you need to move in',
      'Use university housing services or reputable agencies',
      'Always view the property before signing a contract',
      'Check for damp, adequate heating, and security',
      'Understand your rights and responsibilities as a tenant'
    ],
    bestFor: 'Second/third-year students or mature students who want more independence'
  },
  {
    id: 'areas',
    name: 'Area Guides',
    icon: MapPin,
    color: 'amber',
    description: 'Information about popular student areas in UK cities to help you choose the right location for your accommodation.',
    content: [
      {
        city: 'London',
        areas: [
          { name: 'Camden', description: 'Vibrant area with great nightlife, markets and music venues. Popular but expensive.', priceRange: 'High' },
          { name: 'Stratford', description: 'Modern development with good transport links and shopping. More affordable than central areas.', priceRange: 'Medium' },
          { name: 'Wembley', description: 'Developing student hub with new accommodations and good value for money.', priceRange: 'Medium-Low' }
        ]
      },
      {
        city: 'Manchester',
        areas: [
          { name: 'Fallowfield', description: 'Classic student area with lots of shared houses and vibrant atmosphere.', priceRange: 'Medium' },
          { name: 'Rusholme', description: 'Diverse area with famous "Curry Mile" and affordable housing.', priceRange: 'Low' },
          { name: 'City Centre', description: 'Convenient for university with lots of modern apartments.', priceRange: 'High' }
        ]
      },
      {
        city: 'Edinburgh',
        areas: [
          { name: 'Newington', description: 'Close to the university with many student flats and amenities.', priceRange: 'Medium-High' },
          { name: 'Leith', description: 'Trendy area with good food scene and more affordable housing.', priceRange: 'Medium' },
          { name: 'Marchmont', description: 'Popular student area with beautiful Victorian buildings.', priceRange: 'High' }
        ]
      }
    ],
    bestFor: 'Students who want to understand different neighborhoods before choosing accommodation'
  }
];

// Important housing checklist items
const housingChecklist = [
  {
    title: 'Tenancy Agreement',
    description: 'Always read the full contract before signing. Check the length, notice period, and any break clauses.',
    icon: Calendar
  },
  {
    title: 'Deposit Protection',
    description: 'Your deposit must be protected in a government-approved scheme. Get the certificate as proof.',
    icon: Shield
  },
  {
    title: 'Inventory Check',
    description: 'Document the condition of the property and all items when you move in with photos and notes.',
    icon: Check
  },
  {
    title: 'Bills Setup',
    description: 'Arrange utilities (gas, electricity, water, internet) if not included. Consider bill-splitting apps for shared houses.',
    icon: Zap
  },
  {
    title: 'Insurance',
    description: 'Get contents insurance to protect your belongings. Some insurers offer specific student policies.',
    icon: Shield
  },
  {
    title: 'Council Tax',
    description: 'Full-time students are exempt from council tax. Apply for exemption through your university and local council.',
    icon: Building
  }
];

// Utility bills information
const utilityInfo = [
  {
    name: 'Electricity',
    icon: Zap,
    averageCost: '£40-60 per month (shared house)',
    tips: 'Compare suppliers on price comparison websites. Consider smart meters to track usage.'
  },
  {
    name: 'Internet',
    icon: Wifi,
    averageCost: '£25-35 per month',
    tips: 'Student-specific deals often available. Check speed and download limits before signing up.'
  },
  {
    name: 'Water',
    icon: Droplet,
    averageCost: '£20-30 per month',
    tips: 'Usually a fixed rate based on property size. Not typically something you can switch providers for.'
  },
  {
    name: 'Gas/Heating',
    icon: Flame,
    averageCost: '£30-80 per month (seasonal)',
    tips: 'Higher in winter months. Check the energy efficiency rating of properties before renting.'
  }
];

const HousingSection: React.FC = () => {
  const [activeHousing, setActiveHousing] = useState('university');
  const selectedHousing = housingOptions.find(option => option.id === activeHousing) || housingOptions[0];

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 md:px-8">
      {/* Hero section with enhanced visual appeal */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
              stroke="white" strokeWidth="100" fill="none" />
          </svg>
        </div>
        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">UK Student Housing Guide</h2>
              <p className="text-lg text-purple-50 max-w-3xl">
                Finding the right accommodation is one of the most important decisions for international students.
                Understand your options, costs, and locations to make the best choice for your stay in the UK.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Building className="mr-1 h-4 w-4" /> University Halls
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Home className="mr-1 h-4 w-4" /> Private Rentals
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <MapPin className="mr-1 h-4 w-4" /> Area Guides
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <Home className="h-32 w-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Housing options comparison */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Accommodation Options Comparison
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">Housing Types</h4>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {housingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveHousing(option.id)}
                    className={`w-full flex items-center p-4 transition-colors ${activeHousing === option.id
                      ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                      }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${activeHousing === option.id
                      ? 'bg-purple-100 dark:bg-purple-800/50 text-purple-600 dark:text-purple-400'
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
                  <div className={`p-3 rounded-xl ${selectedHousing.color === 'purple'
                    ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    : selectedHousing.color === 'blue'
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : selectedHousing.color === 'green'
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                    }`}>
                    <selectedHousing.icon className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">{selectedHousing.name}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedHousing.description}
                </p>

                {selectedHousing.id !== 'areas' ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Price Range</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedHousing.priceRange}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                          {selectedHousing.billsIncluded ? 'Bills included' : 'Bills not included'}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Contract Length</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedHousing.contractLength}</p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedHousing.bestFor}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          Advantages
                        </h4>
                        <ul className="space-y-3">
                          {selectedHousing.pros!.map((pro, index) => (
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
                        <ul className="space-y-3">
                          {selectedHousing.cons!.map((con, index) => (
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

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Check className="h-5 w-5 text-purple-500 mr-2" />
                        Application Tips
                      </h4>
                      <ul className="space-y-3">
                        {selectedHousing.applicationTips!.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-800/50 text-purple-600 dark:text-purple-400">
                                <span className="text-xs font-bold">{index + 1}</span>
                              </div>
                            </div>
                            <p className="ml-3 text-gray-600 dark:text-gray-300">{tip}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="space-y-8">
                    {selectedHousing.content!.map((cityData, cityIndex) => (
                      <div key={cityIndex} className="border-t border-gray-100 dark:border-gray-700 pt-6 first:border-0 first:pt-0">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{cityData.city}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {cityData.areas.map((area, areaIndex) => (
                            <div
                              key={areaIndex}
                              className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 border border-gray-100 dark:border-gray-700"
                            >
                              <div className="flex items-center mb-2">
                                <MapPin className="h-4 w-4 text-amber-500 mr-2" />
                                <h5 className="font-semibold text-gray-900 dark:text-white">{area.name}</h5>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{area.description}</p>
                              <div className="flex items-center">
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">Price:</span>
                                <span className={`text-xs font-medium ${area.priceRange === 'Low'
                                  ? 'text-green-600 dark:text-green-400'
                                  : area.priceRange === 'Medium' || area.priceRange === 'Medium-Low'
                                    ? 'text-amber-600 dark:text-amber-400'
                                    : 'text-red-600 dark:text-red-400'
                                  }`}>
                                  {area.priceRange}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Housing checklist section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Essential Housing Checklist
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {housingChecklist.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800/30 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-xl">
                    <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Utility bills section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Utility Bills
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If your accommodation doesn't include bills, you'll need to budget for these additional costs. Here's what to expect:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utilityInfo.map((utility, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-800/50 text-purple-600 dark:text-purple-400">
                    <utility.icon className="h-5 w-5" />
                  </div>
                  <h4 className="ml-3 font-semibold text-gray-900 dark:text-white">{utility.name}</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {utility.averageCost}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {utility.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                Most private landlords and letting agencies require a UK-based guarantor who can cover your rent if you fail to pay. As an international student, you may need to pay several months' rent in advance if you don't have a UK guarantor. Some universities offer guarantor schemes, and there are also commercial guarantor services available for a fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingSection;