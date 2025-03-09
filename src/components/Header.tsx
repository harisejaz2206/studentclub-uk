import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  Heart,
  MapPin,
  Store,
  Building2,
  Coffee,
  Pill,
  Train,
  CreditCard,
  ShoppingCart,
  Smartphone,
  Home,
  HelpCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Add these types at the top of the file
interface DropdownItem {
  path: string;
  label: string;
  icon?: React.ElementType;
}

interface NavItem {
  path?: string;
  label: string;
  icon?: React.ElementType;
  dropdownItems?: DropdownItem[];
}

// Navigation items with nested items for dropdowns
const navItems: NavItem[] = [
  { 
    path: '/transportation', 
    label: 'Transport',
    icon: Train 
  },
  { 
    path: '/banking', 
    label: 'Banking',
    icon: CreditCard 
  },
  { 
    path: '/groceries', 
    label: 'Groceries',
    icon: ShoppingCart 
  },
  { 
    path: '/mobile', 
    label: 'Mobile',
    icon: Smartphone 
  },
  { 
    path: '/housing', 
    label: 'Housing',
    icon: Home 
  },
  { 
    path: '/healthcare', 
    label: 'Healthcare',
    icon: Heart
  },
  { 
    label: 'Nearby Services',
    icon: MapPin,
    dropdownItems: [
      { path: '/nearby/pharmacies', label: 'Pharmacies', icon: Pill },
      { path: '/nearby/groceries', label: 'Grocery Stores', icon: Store },
      { path: '/nearby/hospitals', label: 'Hospitals', icon: Building2 },
      { path: '/nearby/cafes', label: 'Study Cafes', icon: Coffee },
    ]
  },
];

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns when location changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path?: string) => path ? location.pathname === path : false;

  const NavLink = ({ item }: { item: NavItem }) => {
    const hasDropdown = 'dropdownItems' in item;
    const isDropdownActive = activeDropdown === item.label;

    return (
      <div className="relative group">
        {hasDropdown ? (
          // Desktop: Hover, Mobile: Click
          <div>
            <button
              onClick={() => setActiveDropdown(isDropdownActive ? null : item.label)}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50
                ${isDropdownActive ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}
            >
              {item.icon && <item.icon className="h-4 w-4 mr-2" />}
              {item.label}
              <ChevronDown 
                className={`ml-1 h-4 w-4 transition-transform duration-200 
                  ${isDropdownActive ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Desktop Dropdown */}
            <div
              className={`absolute top-full left-0 mt-1 w-56 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 z-50
                transition-all duration-200 origin-top-left
                md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-100
                ${isDropdownActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
              {item.dropdownItems?.map((dropdownItem) => (
                <Link
                  key={dropdownItem.path}
                  to={dropdownItem.path}
                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  onClick={() => setActiveDropdown(null)}
                >
                  {dropdownItem.icon && <dropdownItem.icon className="h-4 w-4 mr-2" />}
                  {dropdownItem.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          // Regular link
          <Link
            to={item.path || '/'}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive(item.path)
                ? 'text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-900/30'
                : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            {item.icon && <item.icon className="h-4 w-4 mr-2" />}
            {item.label}
          </Link>
        )}
      </div>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
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
              <NavLink key={item.label} item={item} />
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
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          {navItems.map((item) => (
            <div key={item.label}>
              {'dropdownItems' in item ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <span className="flex items-center">
                      {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                      {item.label}
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdownItems?.map((dropdownItem: DropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="flex items-center px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          {dropdownItem.icon && <dropdownItem.icon className="h-4 w-4 mr-2" />}
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path || '/'}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-navy-600 dark:text-navy-400 bg-navy-50 dark:bg-navy-900/30'
                      : 'text-gray-600 hover:text-navy-600 dark:text-gray-300 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;