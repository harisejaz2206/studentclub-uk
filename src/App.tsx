import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TransportationSection from './components/TransportationSection';
import BankingSection from './components/BankingSection';
import GroceriesSection from './components/GroceriesSection';
import MobileSection from './components/MobileSection';
import HousingSection from './components/HousingSection';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transportation" element={<TransportationSection />} />
            <Route path="/banking" element={<BankingSection />} />
            <Route path="/groceries" element={<GroceriesSection />} />
            <Route path="/mobile" element={<MobileSection />} />
            <Route path="/housing" element={<HousingSection />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-gray-600 dark:text-gray-400">
                <p>© 2025 StudentClub UK. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;