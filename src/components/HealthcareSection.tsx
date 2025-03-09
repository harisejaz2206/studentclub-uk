import React, { useState } from 'react';
import { 
  Heart, // For mental health
  Phone, // For emergency contacts
  Stethoscope, // For NHS/medical
  Pill, // For pharmacy
  AlertCircle, // For warnings/alerts
  Clock, // For timing/urgent care
  Shield, // For insurance/private care
  Brain, // For mental health
  MapPin, // For locations
  Check, // For checkmarks
  Building2, // Replace Hospital
  BadgeAlert, // Replace FirstAid
  ExternalLink // Added for external links
} from 'lucide-react';

const healthcareCategories = [
  {
    id: 'nhs',
    name: 'NHS Registration',
    icon: Stethoscope,
    color: 'navy',
    description: 'Register with the National Health Service (NHS) for free healthcare access',
    content: {
      steps: [
        'Find a GP surgery near your accommodation',
        'Complete the GMS1 registration form',
        'Provide proof of address and student status',
        'Present your BRP or valid visa'
      ],
      requirements: [
        'Proof of address (university accommodation letter or utility bill)',
        'Student ID or university acceptance letter',
        'Passport and visa/BRP',
        'NHS number (if previously registered)'
      ],
      officialLinks: [
        {
          name: 'Find a GP',
          url: 'https://www.nhs.uk/service-search/find-a-gp'
        },
        {
          name: 'NHS GP Online Registration',
          url: 'https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/'
        }
      ]
    }
  },
  {
    id: 'emergency',
    name: 'Emergency Services',
    icon: Phone,
    color: 'red',
    description: 'Know when and how to access emergency medical services',
    content: {
      emergency: {
        number: '999',
        cases: [
          'Life-threatening emergencies',
          'Severe injuries',
          'Chest pain or breathing difficulties',
          'Unconsciousness',
          'Severe allergic reactions'
        ]
      },
      nonEmergency: {
        number: '111',
        cases: [
          'Medical advice needed',
          'Minor injuries',
          'Non-urgent health concerns',
          'Mental health support'
        ]
      }
    }
  },
  {
    id: 'mental-health',
    name: 'Mental Health',
    icon: Brain,
    color: 'navy',
    description: 'Access mental health support and resources',
    content: {
      services: [
        {
          name: 'Student Minds',
          url: 'https://www.studentminds.org.uk',
          description: 'UK student mental health charity'
        },
        {
          name: 'Mind UK',
          url: 'https://www.mind.org.uk',
          description: 'Mental health support and resources'
        },
        {
          name: 'Samaritans',
          phone: '116 123',
          description: '24/7 listening service'
        }
      ],
      universitySupport: [
        'University counseling services',
        'Student wellbeing teams',
        'Peer support programs',
        'International student advisors'
      ]
    }
  },
  {
    id: 'pharmacy',
    name: 'Pharmacies',
    icon: Pill,
    color: 'red',
    description: 'Find pharmacies and manage prescriptions',
    content: {
      prescriptionApps: [
        {
          name: 'Echo',
          url: 'https://www.echo.co.uk',
          features: ['NHS prescription delivery', 'Medication reminders', 'Auto-refills']
        },
        {
          name: 'LloydsPharmacy',
          url: 'https://lloydspharmacy.com',
          features: ['Online prescriptions', 'Health advice', 'Store locator']
        }
      ],
      findPharmacy: {
        url: 'https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy',
        description: 'Find your nearest pharmacy using NHS service search'
      }
    }
  }
];

const MentalHealthContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Mental Health Services */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Support Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {content.services.map((service: any, index: number) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {service.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {service.description}
              </p>
              {service.url ? (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy-600 dark:text-navy-400 hover:text-navy-700 text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Visit Website
                </a>
              ) : (
                <p className="text-sm font-medium text-navy-600 dark:text-navy-400">
                  <Phone className="h-4 w-4 inline mr-1" />
                  {service.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* University Support */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          University Support Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.universitySupport.map((support: string, index: number) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">{support}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources Notice */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800/30">
        <div className="flex">
          <Heart className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
          <p className="text-sm text-purple-700 dark:text-purple-300">
            Remember, it's completely normal to seek support during your studies abroad. 
            These services are confidential and many offer support in multiple languages.
          </p>
        </div>
      </div>
    </div>
  );
};

const PharmacyContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Prescription Apps */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Prescription Management Apps
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {content.prescriptionApps.map((app: any, index: number) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {app.name}
              </h4>
              <ul className="space-y-2 mb-4">
                {app.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-navy-600 dark:text-navy-400 hover:text-navy-700 text-sm"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Find Pharmacy */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Find a Pharmacy
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800/30">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <p className="text-green-700 dark:text-green-300 mb-3">
                {content.findPharmacy.description}
              </p>
              <a
                href={content.findPharmacy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-700 dark:text-green-400 hover:text-green-800 text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Find Nearest Pharmacy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/30">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Most pharmacies in the UK can provide basic health advice for minor conditions. 
            Many are open late and on weekends, and some offer consultation rooms for private discussions.
          </p>
        </div>
      </div>
    </div>
  );
};

const HealthcareSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('nhs');
  const activeService = healthcareCategories.find(cat => cat.id === activeCategory) || healthcareCategories[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-600 to-red-600 text-white mb-16">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 800 800">
              <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
                stroke="white" strokeWidth="100" fill="none" />
            </svg>
          </div>
          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-2xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">UK Healthcare Guide</h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Everything you need to know about accessing healthcare services as an international student in the UK.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    <Stethoscope className="mr-1 h-4 w-4" /> NHS Registration
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    <Phone className="mr-1 h-4 w-4" /> Emergency Services
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    <Brain className="mr-1 h-4 w-4" /> Mental Health Support
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <Heart className="h-32 w-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Numbers - Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-100 dark:border-red-800/30">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h3 className="ml-3 text-xl font-bold text-red-900 dark:text-red-300">
                Emergency (999)
              </h3>
            </div>
            <div className="space-y-4">
              {activeService.content.emergency?.cases.map((case_, index) => (
                <div key={index} className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-red-700 dark:text-red-300">{case_}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="ml-3 text-xl font-bold text-blue-900 dark:text-blue-300">
                NHS 111 - Non-Emergency
              </h3>
            </div>
            <div className="space-y-4">
              {activeService.content.nonEmergency?.cases.map((case_, index) => (
                <div key={index} className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-700 dark:text-blue-300">{case_}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Healthcare Services</h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {healthcareCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center p-4 transition-colors ${
                      activeCategory === category.id
                        ? 'bg-navy-50 dark:bg-navy-900/30 text-navy-600 dark:text-navy-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${
                      activeCategory === category.id
                        ? 'bg-navy-100 dark:bg-navy-800/50 text-navy-600 dark:text-navy-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 sm:p-10">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${
                    activeService.color === 'navy'
                      ? 'bg-navy-50 dark:bg-navy-900/30 text-navy-600 dark:text-navy-400'
                      : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                  }`}>
                    <activeService.icon className="h-6 w-6" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {activeService.name}
                  </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  {activeService.description}
                </p>

                {/* Render content based on category */}
                {renderCategoryContent(activeService)}
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 p-8 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div className="ml-3">
              <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300">
                Important for International Students
              </h3>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">
                The NHS is free for international students studying in the UK for more than 6 months.
                Make sure to pay the Immigration Health Surcharge when applying for your visa.
                Always carry your BRP card and student ID when visiting healthcare facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Update the renderCategoryContent function to include all cases:
const renderCategoryContent = (service: any) => {
  switch (service.id) {
    case 'nhs':
      return <NHSContent content={service.content} />;
    case 'mental-health':
      return <MentalHealthContent content={service.content} />;
    case 'pharmacy':
      return <PharmacyContent content={service.content} />;
    case 'emergency':
      return <EmergencyContent content={service.content} />;
    default:
      return null;
  }
};

// Add EmergencyContent component
const EmergencyContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Emergency Services */}
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-100 dark:border-red-800/30">
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
            Emergency (999)
          </h3>
          <ul className="space-y-2">
            {content.emergency.cases.map((case_: string, index: number) => (
              <li key={index} className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-red-700 dark:text-red-300">{case_}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Non-Emergency Services */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/30">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
            Non-Emergency (111)
          </h3>
          <ul className="space-y-2">
            {content.nonEmergency.cases.map((case_: string, index: number) => (
              <li key={index} className="flex items-start">
                <Clock className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-blue-700 dark:text-blue-300">{case_}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Category content components
const NHSContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Registration Steps */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Registration Steps
        </h3>
        <div className="space-y-4">
          {content.steps.map((step: string, index: number) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-navy-100 dark:bg-navy-800/50 text-navy-600 dark:text-navy-400 flex items-center justify-center">
                  <span className="text-sm font-semibold">{index + 1}</span>
                </div>
              </div>
              <p className="ml-3 text-gray-600 dark:text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          What You'll Need
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.requirements.map((req: string, index: number) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Official Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Useful Links
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.officialLinks.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group"
            >
              <ExternalLink className="h-5 w-5 text-navy-500 mr-2 group-hover:text-navy-600" />
              <span className="text-navy-600 dark:text-navy-400 group-hover:text-navy-700">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareSection;