import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Navigation items
const navItems = [
  { path: '/transportation', label: 'Transport' },
  { path: '/banking', label: 'Banking' },
  { path: '/groceries', label: 'Groceries' },
  { path: '/mobile', label: 'Mobile' },
  { path: '/housing', label: 'Housing' },
  { path: '/faq', label: 'FAQ' }
];

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
        } border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-navy-600 to-red-600 group-hover:from-navy-500 group-hover:to-red-500 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2.5 text-xl font-bold bg-gradient-to-r from-navy-600 to-red-600 bg-clip-text text-transparent group-hover:from-navy-500 group-hover:to-red-500 transition-all duration-300">
                studentclub.uk
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                  ? 'text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-900/30'
                  : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Dark mode toggle for desktop */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(item.path)
                ? 'text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-900/30'
                : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="ml-auto">
                  <ChevronDown className="h-4 w-4" />
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;