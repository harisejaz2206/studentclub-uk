import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: 'navy' | 'red';
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon: IconComponent,
  color = 'navy',
  onClick
}) => {
  // Color schemes based on the color prop
  const colorSchemes = {
    navy: {
      gradientFrom: 'from-navy-500',
      gradientTo: 'to-navy-700',
      iconBg: 'bg-navy-50 dark:bg-navy-900/30',
      iconColor: 'text-navy-600 dark:text-navy-400',
      borderHover: 'group-hover:border-navy-300 dark:group-hover:border-navy-700',
      shadowHover: 'group-hover:shadow-navy-200/40 dark:group-hover:shadow-navy-900/30',
      stripeBg: 'bg-navy-600',
      hoverBg: 'group-hover:bg-navy-50/50 dark:group-hover:bg-navy-900/10',
    },
    red: {
      gradientFrom: 'from-red-500',
      gradientTo: 'to-red-700',
      iconBg: 'bg-red-50 dark:bg-red-900/30',
      iconColor: 'text-red-600 dark:text-red-400',
      borderHover: 'group-hover:border-red-300 dark:group-hover:border-red-700',
      shadowHover: 'group-hover:shadow-red-200/40 dark:group-hover:shadow-red-900/30',
      stripeBg: 'bg-red-600',
      hoverBg: 'group-hover:bg-red-50/50 dark:group-hover:bg-red-900/10',
    }
  };

  const scheme = colorSchemes[color];

  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col h-full cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 ${scheme.borderHover} transition-all duration-300 hover:shadow-xl ${scheme.shadowHover} transform hover:-translate-y-1 ${scheme.hoverBg}`}
    >
      {/* Top accent stripe */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${scheme.stripeBg}`}></div>

      {/* Card content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        {/* Icon with gradient background */}
        <div className={`mb-6 inline-flex rounded-2xl ${scheme.iconBg} p-4`}>
          <IconComponent className={`h-8 w-8 ${scheme.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white group-hover:translate-x-0.5 transition-transform duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Action button with gradient */}
        <div className="mt-auto">
          <button
            className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r ${scheme.gradientFrom} ${scheme.gradientTo} px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:opacity-90 hover:shadow-md hover:scale-105`}
          >
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r ${scheme.gradientFrom} ${scheme.gradientTo} opacity-20 transition-transform duration-300 group-hover:scale-125`}></div>

      {/* Additional decorative elements */}
      <div className={`absolute -top-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-r ${scheme.gradientFrom} ${scheme.gradientTo} opacity-10 transition-transform duration-300 group-hover:scale-150`}></div>
    </div>
  );
};

export default CategoryCard;