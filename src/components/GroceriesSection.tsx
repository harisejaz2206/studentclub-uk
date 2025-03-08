import React, { useState } from 'react';
import { ShoppingCart, Tag, Percent, Clock, MapPin, Truck, AlertCircle, Check, Star } from 'lucide-react';

// Component for the smartphone icon since it's not imported
const Smartphone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

// Enhanced supermarket data with more detailed information
const supermarkets = [
  {
    id: 'tesco',
    name: 'Tesco',
    logo: '/logos/tesco.svg',
    description: 'One of the UK\'s largest supermarkets with stores nationwide.',
    loyaltyProgram: 'Clubcard',
    loyaltyBenefits: 'Points worth up to 3x value with partners, exclusive Clubcard prices',
    studentDiscount: 'No specific student discount, but Clubcard prices offer good value',
    priceRange: 'Medium',
    locations: 'Nationwide - Express (small), Metro (medium), Superstore (large)',
    onlineDelivery: 'Yes, with delivery pass options for regular shoppers',
    bestFor: 'All-round shopping with good value basics',
    budgetTips: [
      'Look for yellow "Clubcard Price" labels for exclusive discounts',
      'Shop the "Aldi Price Match" items for competitive prices',
      'Reduced items appear in the evening, usually marked with yellow stickers'
    ]
  },
  {
    id: 'aldi',
    name: 'Aldi',
    logo: '/logos/aldi.svg',
    description: 'German discount supermarket known for low prices.',
    loyaltyProgram: 'None',
    loyaltyBenefits: 'N/A',
    studentDiscount: 'No specific student discount, but generally lower prices',
    priceRange: 'Low',
    locations: 'Growing presence in most cities and towns',
    onlineDelivery: 'Limited, mainly through Deliveroo in some areas',
    bestFor: 'Budget grocery shopping with surprisingly good quality',
    budgetTips: [
      'Shop the "Super 6" fruit and vegetable offers that change weekly',
      'Visit the central aisle for unique special buys (Thursday and Sunday)',
      'Try their award-winning own-brand products that are much cheaper than branded equivalents'
    ]
  },
  {
    id: 'sainsburys',
    name: 'Sainsbury\'s',
    logo: '/logos/sainsburys.svg',
    description: 'Quality-focused supermarket with good fresh produce.',
    loyaltyProgram: 'Nectar',
    loyaltyBenefits: 'Points can be spent in-store or with partners, personalized offers',
    studentDiscount: '10% discount with TOTUM/NUS card',
    priceRange: 'Medium-High',
    locations: 'Nationwide - Local (small), Superstore (large)',
    onlineDelivery: 'Yes, with various delivery slots',
    bestFor: 'Quality ingredients and 10% student discount',
    budgetTips: [
      'Use the SmartShop app to access personalized Nectar prices',
      'Check the "Great Prices" range for everyday value',
      'Look for the "Imperfectly Tasty" range for cheaper fruit and vegetables'
    ]
  },
  {
    id: 'lidl',
    name: 'Lidl',
    logo: '/logos/lidl.svg',
    description: 'German discount supermarket with excellent bakery section.',
    loyaltyProgram: 'Lidl Plus app',
    loyaltyBenefits: 'Digital coupons, scratch cards after purchases, partner discounts',
    studentDiscount: 'No specific student discount, but generally lower prices',
    priceRange: 'Low',
    locations: 'Growing presence in most cities and towns',
    onlineDelivery: 'No',
    bestFor: 'Budget shopping with excellent bakery and international foods',
    budgetTips: [
      'Download the Lidl Plus app for digital coupons and rewards',
      'Shop the "Pick of the Week" fruit and vegetable offers',
      'Visit the in-store bakery for fresh bread at very competitive prices'
    ]
  }
];

// Money-saving tips for grocery shopping
const savingTips = [
  {
    title: 'Shop in the Evening',
    description: 'Many supermarkets reduce prices on perishable items in the evening, often with yellow "reduced" stickers. Typical reduction times are between 7-8pm.',
    icon: Clock,
    saving: 'Up to 75% off regular prices'
  },
  {
    title: 'Use Loyalty Cards',
    description: 'Sign up for free loyalty programs like Tesco Clubcard, Nectar (Sainsbury\'s), and Lidl Plus to access exclusive discounts and earn points on purchases.',
    icon: Tag,
    saving: 'Up to 20% with exclusive member prices'
  },
  {
    title: 'Try Store Brands',
    description: 'Supermarket own-brand products are often made in the same factories as premium brands but cost significantly less. Start with basics like pasta, rice, and cleaning products.',
    icon: ShoppingCart,
    saving: '20-40% compared to branded equivalents'
  },
  {
    title: 'Shop at Markets',
    description: 'Local markets often have fresher produce at lower prices than supermarkets. Visit near closing time for the best deals as vendors try to sell remaining stock.',
    icon: MapPin,
    saving: '30-50% on fresh fruit and vegetables'
  },
  {
    title: 'Plan Meals & Make Lists',
    description: 'Plan your meals for the week and make a shopping list to avoid impulse purchases. Check what you already have before shopping.',
    icon: Check,
    saving: '15-20% by reducing food waste and impulse buys'
  },
  {
    title: 'Use Grocery Apps',
    description: 'Apps like Too Good To Go and Olio help you find discounted food that would otherwise go to waste from local shops and restaurants.',
    icon: Smartphone,
    saving: 'Up to 70% on food that would otherwise be wasted'
  }
];

const GroceriesSection: React.FC = () => {
  const [activeSupermarket, setActiveSupermarket] = useState('tesco');
  const selectedSupermarket = supermarkets.find(s => s.id === activeSupermarket) || supermarkets[0];

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 md:px-8">
      {/* Hero section with enhanced visual appeal */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
              stroke="white" strokeWidth="100" fill="none" />
          </svg>
        </div>
        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">UK Grocery Shopping Guide</h2>
              <p className="text-lg text-green-50 max-w-3xl">
                Navigating UK supermarkets can be confusing for international students.
                Learn how to find the best deals, use loyalty programs, and save money on your weekly shop.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Tag className="mr-1 h-4 w-4" /> Loyalty Programs
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Percent className="mr-1 h-4 w-4" /> Student Discounts
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  <Truck className="mr-1 h-4 w-4" /> Delivery Options
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <ShoppingCart className="h-32 w-32 text-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* UK Supermarket Guide */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          UK Supermarket Comparison
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">Popular Supermarkets</h4>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {supermarkets.map((supermarket) => (
                  <button
                    key={supermarket.id}
                    onClick={() => setActiveSupermarket(supermarket.id)}
                    className={`w-full flex items-center p-4 transition-colors ${activeSupermarket === supermarket.id
                      ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                      }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${activeSupermarket === supermarket.id
                      ? 'bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}>
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{supermarket.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedSupermarket.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Price Range:</span>
                        <div className="flex">
                          {['Low', 'Medium', 'Medium-High', 'High'].indexOf(selectedSupermarket.priceRange) >= 0 && (
                            <div className="flex">
                              {[...Array(4)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i <= ['Low', 'Medium', 'Medium-High', 'High'].indexOf(selectedSupermarket.priceRange)
                                    ? 'text-green-500'
                                    : 'text-gray-300 dark:text-gray-600'
                                    }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedSupermarket.description}
                </p>

                {selectedSupermarket.studentDiscount && selectedSupermarket.studentDiscount.includes('discount') && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Star className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Student Discount</h4>
                        <p className="mt-1 text-sm text-green-700 dark:text-green-400">{selectedSupermarket.studentDiscount}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Loyalty Program</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{selectedSupermarket.loyaltyProgram || 'None'}</p>
                    {selectedSupermarket.loyaltyBenefits !== 'N/A' && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{selectedSupermarket.loyaltyBenefits}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Locations</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedSupermarket.locations}</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Online Delivery</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedSupermarket.onlineDelivery}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Percent className="h-5 w-5 text-green-500 mr-2" />
                    Money-Saving Tips for {selectedSupermarket.name}
                  </h4>
                  <ul className="space-y-3">
                    {selectedSupermarket.budgetTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400">
                            <span className="text-xs font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <p className="ml-3 text-gray-600 dark:text-gray-300">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Money-saving tips section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Money-Saving Tips for Grocery Shopping
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savingTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800/30 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-xl">
                    <tip.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {tip.title}
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{tip.description}</p>

                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-sm text-green-700 dark:text-green-400">
                  <span className="font-medium">Potential Savings: </span>
                  {tip.saving}
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
            <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300">UK Shopping Differences</h3>
            <div className="mt-2 text-amber-700 dark:text-amber-400">
              <p className="text-sm">
                UK supermarkets may differ from what you're used to at home. Milk and eggs are usually not refrigerated in many countries, but they are in the UK. Portion sizes tend to be smaller, and you'll need to bring your own bags or pay for them. Most supermarkets have self-checkout options which can be faster for small shops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceriesSection;