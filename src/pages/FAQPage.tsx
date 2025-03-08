import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Filter, X, Check, AlertCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// Enhanced FAQ data with more detailed information
const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What documents do I need as an international student?',
    answer: "You'll need your passport, visa, CAS letter from your university, proof of funding, and accommodation details. Keep digital copies of all documents. It's also recommended to bring original academic certificates, passport-sized photos, and any medical records or prescriptions."
  },
  {
    category: 'General',
    question: 'How do I register with a doctor in the UK?',
    answer: "Find your local GP surgery, complete their registration form, and provide proof of address and student status. Most universities have their own health centers. Registration is free and gives you access to the National Health Service (NHS). You should register as soon as possible after arrival rather than waiting until you're ill."
  },
  {
    category: 'General',
    question: 'Do I need to pay for healthcare as an international student?',
    answer: "If your course is longer than 6 months, you'll have paid the Immigration Health Surcharge as part of your visa application, which gives you access to NHS services. For shorter courses, you should get comprehensive health insurance. EU students should check if they can use their EHIC/GHIC card."
  },
  {
    category: 'General',
    question: 'Can I work while studying in the UK?',
    answer: "Most international students can work up to 20 hours per week during term time and full-time during holidays. However, this depends on your visa conditions, so always check your specific visa documentation. PhD students often have different working hour allowances."
  },
  {
    category: 'Banking',
    question: 'Can I open a UK bank account before arriving?',
    answer: "Some digital banks like Monzo allow account opening before arrival. Traditional banks usually require you to be in the UK with proof of address. Wise and Revolut are also popular options that can be set up before arriving, offering multi-currency accounts that are useful for international students."
  },
  {
    category: 'Banking',
    question: 'What documents do I need to open a bank account?',
    answer: "You typically need your passport, visa, student ID, proof of address (like university accommodation letter), and acceptance letter from your university. Some banks may also require a letter from your university specifically for banking purposes - check with your university's international student office."
  },
  {
    category: 'Banking',
    question: 'How long does it take to open a UK bank account?',
    answer: "Digital banks can approve accounts within minutes to hours. Traditional banks may take 1-2 weeks to process your application and send your card and PIN separately. During peak student arrival times (September-October), the process may take longer due to high demand."
  },
  {
    category: 'Banking',
    question: 'Are there bank accounts specifically for international students?',
    answer: "Yes, many UK banks offer accounts designed for international students with lower or no minimum deposits and simplified application processes. HSBC, Santander, and Barclays all offer international student accounts. Digital banks like Monzo and Starling don't have specific student accounts but are popular due to their easy setup process."
  },
  {
    category: 'Transportation',
    question: 'How do I get a student railcard?',
    answer: "You can apply online at 16-25railcard.co.uk or at any train station ticket office. You'll need a passport-style photo and proof of student status. The card costs £30 for one year or £70 for three years and saves you 1/3 on rail fares throughout Great Britain. It's definitely worth the investment if you plan to travel by train."
  },
  {
    category: 'Transportation',
    question: 'Is it worth getting a bus pass?',
    answer: "If you use buses regularly, a student bus pass can save significant money. Compare weekly commuting costs against pass prices for your area. Most major cities offer student discounts on weekly, monthly, or termly passes. In London, students get 30% off Travelcards and Bus & Tram Passes with an 18+ Student Oyster photocard."
  },
  {
    category: 'Transportation',
    question: 'How does public transport work in London?',
    answer: "London has an extensive network of tubes (underground), buses, trains, and trams. You can use an Oyster card, contactless payment card, or mobile payment for all services. As a student, apply for an 18+ Student Oyster photocard for discounted travel. The Transport for London (TfL) app or Citymapper app are essential for navigating the system."
  },
  {
    category: 'Transportation',
    question: 'Is it better to use buses or trains for intercity travel?',
    answer: "Trains are generally faster but more expensive, even with a railcard. Coaches (long-distance buses) like National Express or Megabus are significantly cheaper but take longer. For budget travel, book coach tickets well in advance. For convenience and time-saving, trains are better if you can afford them or find advance fares."
  },
  {
    category: 'Mobile',
    question: 'Do I need a UK phone number?',
    answer: "Yes, it's highly recommended. A UK number makes it easier to set up services, receive verification codes, and stay in touch with university and friends. Many services, including banks, require a UK phone number for security verification. It also helps avoid expensive international roaming charges on your home country number."
  },
  {
    category: 'Mobile',
    question: "What's the difference between pay-as-you-go and contract plans?",
    answer: "Pay-as-you-go (PAYG) requires no credit check, offers flexibility, and can be topped up as needed. Contract plans offer better value for regular users with consistent monthly costs and often more data, but typically require a credit check and commitment of 12-24 months. For international students, PAYG or 30-day rolling contracts are usually the most suitable options."
  },
  {
    category: 'Mobile',
    question: 'Will my phone from home work in the UK?',
    answer: "Most modern smartphones will work in the UK, but your phone needs to be unlocked to use a UK SIM card. Check with your home provider if your phone is locked. The UK uses GSM network technology, which is standard in Europe and Asia, but some CDMA phones from the US or other countries may not be compatible."
  },
  {
    category: 'Mobile',
    question: 'Which mobile provider has the best student deals?',
    answer: "Vodafone offers 10-20% student discounts through TOTUM/UNiDAYS. Three offers student plans with extra data. VOXI (using Vodafone's network) offers endless social media data. EE has the best overall coverage but can be more expensive. For budget options, giffgaff, SMARTY, and Lebara offer flexible plans with no contracts."
  },
  {
    category: 'Housing',
    question: 'When should I start looking for accommodation?',
    answer: "For university halls, apply as soon as you accept your offer. For private housing, start looking 3-4 months before your intended move-in date. University-managed accommodation often prioritizes first-year and international students, but places fill quickly. For private rentals, the best properties are often taken 2-3 months before the start of the academic year."
  },
  {
    category: 'Housing',
    question: "What's the difference between university halls and private accommodation?",
    answer: "University halls offer convenience, inclusive bills, support staff, and easier social connections, but may have more rules and less privacy. Private accommodation provides more independence, potentially lower costs, and choice of housemates, but requires managing bills separately and may need a UK guarantor. First-year international students typically benefit from the simplicity of university halls."
  },
  {
    category: 'Housing',
    question: 'Do I need a guarantor for private housing?',
    answer: "Most private landlords and agencies require a UK-based guarantor who can cover your rent if you fail to pay. As an international student without a UK guarantor, you may need to pay several months' rent in advance (typically 6 months). Some universities offer guarantor schemes, and there are commercial guarantor services available for a fee (around 4-8% of your annual rent)."
  },
  {
    category: 'Housing',
    question: 'What should I check before signing a housing contract?',
    answer: "Verify the contract length, notice period, and break clauses. Ensure your deposit will be protected in a government-approved scheme. Check responsibilities for repairs, bills inclusion, and any additional fees. Take dated photos of any existing damage during inventory check. Have a UK resident or university advisor review the contract if possible before signing."
  },
  {
    category: 'Groceries',
    question: 'Which supermarket is cheapest for students?',
    answer: "Aldi and Lidl typically offer the lowest prices. However, Tesco and Sainsbury's with student discount cards and loyalty programs can be competitive. Aldi and Lidl excel for basics and fresh produce, while larger supermarkets have better selection of international foods. Many students use a combination - budget stores for basics and larger stores for specific items."
  },
  {
    category: 'Groceries',
    question: 'How can I save money on grocery shopping?',
    answer: "Shop in the evening for reduced items (yellow stickers), use supermarket loyalty cards, buy store brands instead of name brands, and plan meals to avoid waste. Shopping at local markets near closing time can also yield great deals on fresh produce. Apps like Too Good To Go and Olio help you find discounted food that would otherwise go to waste."
  },
  {
    category: 'Groceries',
    question: 'Are there international food stores in the UK?',
    answer: "Yes, most UK cities have international food stores catering to various cuisines. Larger cities have dedicated Asian, Middle Eastern, African, and European supermarkets. Areas with large international student populations typically have better options. Many regular supermarkets also have international food sections, with Tesco and Sainsbury's offering the widest selection."
  },
  {
    category: 'Groceries',
    question: 'Do supermarkets deliver groceries to students?',
    answer: "Yes, all major UK supermarkets offer online shopping with delivery, including Tesco, Sainsbury's, Asda, Morrisons, and Waitrose. Delivery fees range from £1-7 depending on time slot, or you can often get free delivery with a monthly subscription. Many offer student discounts on delivery passes. Apps like Deliveroo and Uber Eats also deliver from some supermarkets with faster delivery times but higher fees."
  }
];

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  'General': <HelpCircle className="h-5 w-5" />,
  'Banking': <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l18 0M3 12h18M3 18h6" /></svg>,
  'Transportation': <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>,
  'Mobile': <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
  'Housing': <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  'Groceries': <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
};

// Category colors mapping
const categoryColors: Record<string, { bg: string, text: string, darkBg: string, darkText: string, hover: string, darkHover: string }> = {
  'General': {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    darkBg: 'dark:bg-indigo-900/20',
    darkText: 'dark:text-indigo-400',
    hover: 'hover:bg-indigo-100',
    darkHover: 'dark:hover:bg-indigo-900/30'
  },
  'Banking': {
    bg: 'bg-red-50',
    text: 'text-red-600',
    darkBg: 'dark:bg-red-900/20',
    darkText: 'dark:text-red-400',
    hover: 'hover:bg-red-100',
    darkHover: 'dark:hover:bg-red-900/30'
  },
  'Transportation': {
    bg: 'bg-navy-50',
    text: 'text-navy-600',
    darkBg: 'dark:bg-navy-900/20',
    darkText: 'dark:text-navy-400',
    hover: 'hover:bg-navy-100',
    darkHover: 'dark:hover:bg-navy-900/30'
  },
  'Mobile': {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    darkBg: 'dark:bg-blue-900/20',
    darkText: 'dark:text-blue-400',
    hover: 'hover:bg-blue-100',
    darkHover: 'dark:hover:bg-blue-900/30'
  },
  'Housing': {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    darkBg: 'dark:bg-purple-900/20',
    darkText: 'dark:text-purple-400',
    hover: 'hover:bg-purple-100',
    darkHover: 'dark:hover:bg-purple-900/30'
  },
  'Groceries': {
    bg: 'bg-green-50',
    text: 'text-green-600',
    darkBg: 'dark:bg-green-900/20',
    darkText: 'dark:text-green-400',
    hover: 'hover:bg-green-100',
    darkHover: 'dark:hover:bg-green-900/30'
  }
};

const FAQPage: React.FC = () => {
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({});

  // Toggle FAQ expansion
  const toggleFaq = (question: string) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  // Filter FAQs based on active category and search query
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3 p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
            <HelpCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about student life in the UK
          </p>
        </div>

        {/* Search and filter section */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              placeholder="Search for questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'all'
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center transition-colors ${activeCategory === category
                  ? `${categoryColors[category].bg} ${categoryColors[category].text} ${categoryColors[category].darkBg} ${categoryColors[category].darkText}`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                <span className="mr-1.5">{categoryIcons[category]}</span>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results summary */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} for "{searchQuery}"
            </p>
          </div>
        )}

        {/* FAQ accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isExpanded = expandedFaqs[faq.question] || false;
              const categoryColor = categoryColors[faq.category];

              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all ${isExpanded ? 'shadow-md' : ''
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.question)}
                    className="w-full text-left p-6 flex justify-between items-start focus:outline-none"
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg mr-4 ${categoryColor.bg} ${categoryColor.text} ${categoryColor.darkBg} ${categoryColor.darkText}`}>
                        {categoryIcons[faq.category]}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                          {faq.question}
                        </h3>
                        <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full ${categoryColor.bg} ${categoryColor.text} ${categoryColor.darkBg} ${categoryColor.darkText}`}>
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800/30 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Help section */}
        <div className="mt-16 max-w-3xl mx-auto bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 sm:p-8 border border-indigo-100 dark:border-indigo-800/30">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="flex-shrink-0 bg-white dark:bg-indigo-800/50 rounded-full p-3 mb-4 sm:mb-0 sm:mr-6">
              <HelpCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center sm:text-left">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center sm:text-left">
                If you couldn't find the answer you were looking for, our support team is here to help.
              </p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Contact Support
                </button>
                <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Visit Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;