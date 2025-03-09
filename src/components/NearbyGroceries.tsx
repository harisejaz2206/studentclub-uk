import React, { useState, useEffect } from 'react';
import { Store, Clock, Phone, MapPin, Search, Loader2, CreditCard, Tag } from 'lucide-react';
import axios from 'axios';

interface GroceryStore {
  id: number;
  lat: number;
  lon: number;
  tags: {
    name?: string;
    brand?: string;
    'addr:street'?: string;
    'addr:housenumber'?: string;
    'addr:postcode'?: string;
    'opening_hours'?: string;
    phone?: string;
    website?: string;
    payment?: string;
  };
}

function NearbyGroceries() {
  const [stores, setStores] = useState<GroceryStore[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('London');

  const fetchGroceryStores = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const query = `[out:json];area[name="${city}"]->.searchArea;(node[shop=supermarket](area.searchArea););out;`;
      const response = await axios.get(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
      setStores(response.data.elements);
    } catch (err) {
      setError('Failed to fetch grocery store data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroceryStores(searchCity);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGroceryStores(searchCity);
  };

  // Helper function to format store type badge color
  const getStoreBadgeColor = (brand?: string) => {
    const brands: Record<string, string> = {
      'Tesco': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Sainsbury': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'ASDA': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Morrisons': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Lidl': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Aldi': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    };
    return brands[brand || ''] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Nearby Grocery Stores
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover supermarkets and local stores in your area, check opening hours, and find student discounts
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Enter city name..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
              Search
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="max-w-xl mx-auto mb-8 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
            {error}
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Store className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {store.tags.name || 'Unnamed Store'}
                    </h3>
                    {store.tags.brand && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStoreBadgeColor(store.tags.brand)}`}>
                        {store.tags.brand}
                      </span>
                    )}
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {[
                        store.tags['addr:housenumber'],
                        store.tags['addr:street'],
                        store.tags['addr:postcode']
                      ].filter(Boolean).join(', ')}
                    </span>
                  </div>

                  {/* Opening Hours */}
                  {store.tags.opening_hours && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{store.tags.opening_hours}</span>
                    </div>
                  )}

                  {/* Payment Methods */}
                  {store.tags.payment && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <CreditCard className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{store.tags.payment}</span>
                    </div>
                  )}

                  {/* Phone */}
                  {store.tags.phone && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{store.tags.phone}</span>
                    </div>
                  )}

                  {/* Student Discount Indicator */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Tesco', 'Sainsbury', 'ASDA', 'Morrisons'].includes(store.tags.brand || '') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        <Tag className="h-3 w-3 mr-1" />
                        Student Discount Available
                      </span>
                    )}
                  </div>

                  {/* Map Link */}
                  <a
                    href={`https://www.google.com/maps?q=${store.lat},${store.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <MapPin className="h-4 w-4 mr-1" />
                    View on map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600 dark:text-blue-400" />
          </div>
        )}

        {/* No Results */}
        {!loading && stores.length === 0 && !error && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No grocery stores found in this area.
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Shopping Tips for Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <Tag className="h-4 w-4 mt-1 text-blue-500" />
              <span>Sign up for store loyalty cards to earn points and get exclusive discounts</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-1 text-blue-500" />
              <span>Shop in the evening for reduced-price fresh items</span>
            </div>
            <div className="flex items-start gap-2">
              <CreditCard className="h-4 w-4 mt-1 text-blue-500" />
              <span>Show your student ID for additional discounts at major chains</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyGroceries;