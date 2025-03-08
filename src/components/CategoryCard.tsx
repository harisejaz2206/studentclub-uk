import React from 'react';
import { XIcon as Icon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: Icon;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon: IconComponent, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="category-card group cursor-pointer"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-navy-50 dark:bg-navy-900/50 group-hover:bg-navy-100 dark:group-hover:bg-navy-800/50 transition-colors">
            <IconComponent className="h-6 w-6 text-navy-600 dark:text-navy-400" />
          </div>
          <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-sm text-navy-600 dark:text-navy-400 font-medium">
          Learn more
          <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;