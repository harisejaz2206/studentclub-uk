import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What documents do I need as an international student?',
    answer: "You'll need your passport, visa, CAS letter from your university, proof of funding, and accommodation details. Keep digital copies of all documents."
  },
  {
    category: 'General',
    question: 'How do I register with a doctor in the UK?',
    answer: 'Find your local GP surgery, complete their registration form, and provide proof of address and student status. Most universities have their own health centers.'
  },
  {
    category: 'Banking',
    question: 'Can I open a UK bank account before arriving?',
    answer: 'Some digital banks like Monzo allow account opening before arrival. Traditional banks usually require you to be in the UK with proof of address.'
  },
  {
    category: 'Banking',
    question: 'What documents do I need to open a bank account?',
    answer: 'You typically need your passport, visa, student ID, proof of address (like university accommodation letter), and acceptance letter from your university.'
  },
  {
    category: 'Transportation',
    question: 'How do I get a student railcard?',
    answer: "You can apply online at 16-25railcard.co.uk. You'll need a passport-style photo and proof of student status. The card saves you 1/3 on rail fares."
  },
  {
    category: 'Transportation',
    question: 'Is it worth getting a bus pass?',
    answer: 'If you use buses regularly, a student bus pass can save significant money. Compare weekly commuting costs against pass prices for your area.'
  },
  {
    category: 'Mobile',
    question: 'Do I need a UK phone number?',
    answer: "Yes, it's highly recommended. A UK number makes it easier to set up services, receive verification codes, and stay in touch with university and friends."
  },
  {
    category: 'Housing',
    question: 'When should I start looking for accommodation?',
    answer: 'For university halls, apply as soon as you accept your offer. For private housing, start looking 3-4 months before your intended move-in date.'
  },
  {
    category: 'Groceries',
    question: 'Which supermarket is cheapest for students?',
    answer: "Aldi and Lidl typically offer the lowest prices. However, Tesco and Sainsbury's with student discount cards and loyalty programs can be competitive."
  }
];

const FAQPage: React.FC = () => {
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <HelpCircle className="h-12 w-12 text-navy-600 dark:text-navy-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Find answers to common questions about student life in the UK
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {category} Questions
            </h2>
            <div className="grid gap-6">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq, index) => (
                  <div
                    key={index}
                    className="category-card overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;