import React, { useState } from 'react';
import {
  FileText, // For documents
  Calendar, // For timeline/dates
  PoundSterling, // For fees
  CheckCircle, // For requirements
  AlertCircle, // For warnings
  ExternalLink, // For external links
  Clock, // For processing times
  Landmark, // For official institutions
  GraduationCap, // For student related
  Globe, // For international
  BadgeCheck, // For verification
  HelpCircle // For support
} from 'lucide-react';

const visaCategories = [
  {
    id: 'requirements',
    name: 'Visa Requirements',
    icon: CheckCircle,
    color: 'navy',
    description: 'Essential requirements for your Student visa application',
    content: {
      mainRequirements: [
        'Confirmed place (CAS) from a licensed student sponsor',
        'Sufficient funds for course fees and living costs',
        'English language skills at required level',
        'Valid passport or travel document',
        'Tuberculosis test results (if applicable)'
      ],
      financialRequirements: {
        description: 'You must have enough money to pay for:',
        items: [
          'Course fees for first year',
          'Living costs: £1,334/month in London (£1,023/month outside London)',
          '28 consecutive days of bank statements'
        ]
      },
      officialLinks: [
        {
          name: 'Check if you need a UK visa',
          url: 'https://www.gov.uk/check-uk-visa'
        },
        {
          name: 'Student visa requirements',
          url: 'https://www.gov.uk/student-visa'
        }
      ]
    }
  },
  {
    id: 'application',
    name: 'Application Process',
    icon: FileText,
    color: 'red',
    description: 'Step-by-step guide to applying for your Student visa',
    content: {
      steps: [
        'Accept your university offer and receive CAS',
        'Prepare documents and translations',
        'Book and attend tuberculosis test (if required)',
        'Complete online visa application form',
        'Pay visa fee and immigration health surcharge',
        'Book and attend biometric appointment',
        'Submit supporting documents'
      ],
      timeline: {
        earliest: '6 months before course starts',
        decision: 'Usually within 3 weeks',
        arrival: 'Up to 1 week before course starts'
      }
    }
  },
  {
    id: 'costs',
    name: 'Fees & Costs',
    icon: PoundSterling,
    color: 'navy',
    description: 'Understanding all costs involved in your visa application',
    content: {
      visaFees: [
        { type: 'Student visa (apply outside UK)', cost: '£363' },
        { type: 'Student visa (extend/switch inside UK)', cost: '£490' }
      ],
      healthSurcharge: {
        cost: '£470 per year',
        description: 'Immigration Health Surcharge (IHS) gives you access to NHS services'
      },
      additionalCosts: [
        'Tuberculosis test (if required)',
        'English language tests',
        'Document translation services',
        'Travel to visa application centre'
      ]
    }
  },
  {
    id: 'documents',
    name: 'Required Documents',
    icon: BadgeCheck,
    color: 'red',
    description: 'Complete checklist of required documentation',
    content: {
      mainDocuments: [
        'Current passport',
        'Confirmation of Acceptance for Studies (CAS)',
        'Proof of financial means',
        'Academic qualifications',
        'English language test results',
        'ATAS certificate (if required)',
        'Tuberculosis test results (if applicable)'
      ],
      financialDocuments: [
        'Bank statements',
        'Scholarship/funding letters',
        'Parent/legal guardian consent (if using their funds)'
      ]
    }
  }
];

const VisaGuideSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('requirements');
  const activeSection = visaCategories.find(cat => cat.id === activeCategory) || visaCategories[0];

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
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">UK Student Visa Guide</h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Everything you need to know about applying for your UK Student visa.
                  Follow our step-by-step guide to ensure a successful application.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    <CheckCircle className="mr-1 h-4 w-4" /> Requirements
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    <Calendar className="mr-1 h-4 w-4" /> Timeline
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    <PoundSterling className="mr-1 h-4 w-4" /> Costs
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <Globe className="h-32 w-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Guide Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-16">
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Guide: Key Points
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-50 dark:bg-navy-900/20 rounded-lg p-4 border border-navy-100 dark:border-navy-800/30">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-navy-600 dark:text-navy-400 mr-2" />
                  <h3 className="font-semibold text-navy-900 dark:text-navy-300">When to Apply</h3>
                </div>
                <p className="text-sm text-navy-700 dark:text-navy-400">
                  Apply up to 6 months before your course starts. Decision usually within 3 weeks.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-100 dark:border-red-800/30">
                <div className="flex items-center mb-3">
                  <PoundSterling className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  <h3 className="font-semibold text-red-900 dark:text-red-300">Costs</h3>
                </div>
                <p className="text-sm text-red-700 dark:text-red-400">
                  Visa fee: £363 + Immigration Health Surcharge: £470 per year
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800/30">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <h3 className="font-semibold text-green-900 dark:text-green-300">Key Requirements</h3>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400">
                  CAS from university, sufficient funds, English language qualification
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">Guide Sections</h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {visaCategories.map((category) => (
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
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${
                    activeSection.color === 'navy'
                      ? 'bg-navy-50 dark:bg-navy-900/30 text-navy-600 dark:text-navy-400'
                      : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                  }`}>
                    <activeSection.icon className="h-6 w-6" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {activeSection.name}
                  </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  {activeSection.description}
                </p>

                {/* Render content based on category */}
                {renderCategoryContent(activeSection)}
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
                Important Notice
              </h3>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">
                Visa requirements and fees may change. Always check the official UK government website
                for the most up-to-date information. Start your application early to allow time for
                document preparation and potential delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to render category-specific content
const renderCategoryContent = (section: any) => {
  switch (section.id) {
    case 'requirements':
      return <RequirementsContent content={section.content} />;
    case 'application':
      return <ApplicationContent content={section.content} />;
    case 'costs':
      return <CostsContent content={section.content} />;
    case 'documents':
      return <DocumentsContent content={section.content} />;
    default:
      return null;
  }
};

// Content Components

const RequirementsContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Main Requirements */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Main Requirements
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {content.mainRequirements.map((req: string, index: number) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Requirements */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Financial Requirements
        </h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/30 mb-4">
          <p className="text-blue-700 dark:text-blue-300 mb-3">
            {content.financialRequirements.description}
          </p>
          <ul className="space-y-2">
            {content.financialRequirements.items.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <PoundSterling className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-blue-700 dark:text-blue-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Official Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Official Resources
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
              <span className="text-navy-600 dark:text-navy-400 group-hover:text-navy-700">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ApplicationContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Application Steps */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Application Steps
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

      {/* Timeline */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Application Timeline
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800/30">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-green-500 mr-2" />
              <h4 className="font-medium text-green-800 dark:text-green-300">
                Earliest Application
              </h4>
            </div>
            <p className="text-green-700 dark:text-green-400 text-sm">
              {content.timeline.earliest}
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/30">
            <div className="flex items-center mb-2">
              <Clock className="h-5 w-5 text-blue-500 mr-2" />
              <h4 className="font-medium text-blue-800 dark:text-blue-300">
                Decision Time
              </h4>
            </div>
            <p className="text-blue-700 dark:text-blue-400 text-sm">
              {content.timeline.decision}
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800/30">
            <div className="flex items-center mb-2">
              <Globe className="h-5 w-5 text-purple-500 mr-2" />
              <h4 className="font-medium text-purple-800 dark:text-purple-300">
                UK Arrival
              </h4>
            </div>
            <p className="text-purple-700 dark:text-purple-400 text-sm">
              {content.timeline.arrival}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CostsContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Visa Fees */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Visa Application Fees
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.visaFees.map((fee: any, index: number) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {fee.type}
              </h4>
              <p className="text-lg font-semibold text-navy-600 dark:text-navy-400">
                {fee.cost}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Health Surcharge */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Immigration Health Surcharge
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800/30">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <PoundSterling className="h-5 w-5 text-green-500 mt-1" />
            </div>
            <div className="ml-3">
              <p className="font-medium text-green-800 dark:text-green-300">
                {content.healthSurcharge.cost}
              </p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                {content.healthSurcharge.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Costs */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Additional Costs to Consider
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.additionalCosts.map((cost: string, index: number) => (
            <div key={index} className="flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300">{cost}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DocumentsContent: React.FC<{ content: any }> = ({ content }) => {
  return (
    <div className="space-y-8">
      {/* Main Documents */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Essential Documents
        </h3>
        <div className="bg-navy-50 dark:bg-navy-900/20 rounded-lg p-4 border border-navy-100 dark:border-navy-800/30">
          <div className="grid grid-cols-1 gap-3">
            {content.mainDocuments.map((doc: string, index: number) => (
              <div key={index} className="flex items-start">
                <BadgeCheck className="h-5 w-5 text-navy-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700 dark:text-navy-300">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Documents */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Financial Documents
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800/30">
          <div className="grid grid-cols-1 gap-3">
            {content.financialDocuments.map((doc: string, index: number) => (
              <div key={index} className="flex items-start">
                <PoundSterling className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-green-700 dark:text-green-300">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Tips */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-100 dark:border-amber-800/30">
        <div className="flex">
          <HelpCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-2">
              Important Tips
            </h4>
            <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-2">
              <li>• All documents must be original or certified copies</li>
              <li>• Non-English documents need certified translations</li>
              <li>• Keep copies of all submitted documents</li>
              <li>• Check document requirements for your specific country</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaGuideSection;