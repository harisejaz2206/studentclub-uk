import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-navy-600 dark:text-navy-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-navy-600 to-red-600 bg-clip-text text-transparent">
                studentclub.uk
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8 ml-8">
              <Link
                to="/transportation"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/transportation')
                    ? 'text-navy-600 dark:text-navy-400'
                    : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400'
                }`}
              >
                Transport
              </Link>
              <Link
                to="/banking"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/banking')
                    ? 'text-navy-600 dark:text-navy-400'
                    : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400'
                }`}
              >
                Banking
              </Link>
              <Link
                to="/groceries"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/groceries')
                    ? 'text-navy-600 dark:text-navy-400'
                    : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400'
                }`}
              >
                Groceries
              </Link>
              <Link
                to="/mobile"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/mobile')
                    ? 'text-navy-600 dark:text-navy-400'
                    : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400'
                }`}
              >
                Mobile
              </Link>
              <Link
                to="/housing"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/housing')
                    ? 'text-navy-600 dark:text-navy-400'
                    : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400'
                }`}
              >
                Housing
              </Link>
              <Link
                to="/faq"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/faq')
                    ? 'text-navy-600 dark:text-navy-400'
                    : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400'
                }`}
              >
                FAQ
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;