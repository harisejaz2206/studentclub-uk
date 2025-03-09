import React, { useState, useEffect } from 'react';
import { Pill, Clock, Phone, MapPin, Search, Loader2 } from 'lucide-react';
import axios from 'axios';

interface Pharmacy {
  id: number;
  lat: number;
  lon: number;
  tags: {
    name?: string;
    'addr:street'?: string;
    'addr:housenumber'?: string;
    'addr:postcode'?: string;
    'opening_hours'?: string;
    phone?: string;
  };
}

const NearbyPharmacies: React.FC = () => {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('London');

  const fetchPharmacies = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const query = `[out:json];area[name="${city}"]->.searchArea;(node[amenity=pharmacy](area.searchArea););out;`;
      const response = await axios.get(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
      setPharmacies(response.data.elements);
    } catch (err) {
      setError('Failed to fetch pharmacy data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPharmacies(searchCity);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPharmacies(searchCity);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Nearby Pharmacies
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Locate pharmacies in your area, check opening hours, and find contact information
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-navy-600 hover:bg-navy-700 text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
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
          {pharmacies.map((pharmacy) => (
            <div
              key={pharmacy.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <Pill className="h-6 w-6 text-green-500 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {pharmacy.tags.name || 'Unnamed Pharmacy'}
                  </h3>
                  
                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {[
                        pharmacy.tags['addr:housenumber'],
                        pharmacy.tags['addr:street'],
                        pharmacy.tags['addr:postcode']
                      ].filter(Boolean).join(', ')}
                    </span>
                  </div>

                  {/* Opening Hours */}
                  {pharmacy.tags.opening_hours && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{pharmacy.tags.opening_hours}</span>
                    </div>
                  )}

                  {/* Phone */}
                  {pharmacy.tags.phone && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{pharmacy.tags.phone}</span>
                    </div>
                  )}

                  {/* Map Link */}
                  <a
                    href={`https://www.google.com/maps?q=${pharmacy.lat},${pharmacy.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-navy-600 dark:text-navy-400 hover:underline"
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
            <Loader2 className="h-8 w-8 animate-spin text-navy-600 dark:text-navy-400" />
          </div>
        )}

        {/* No Results */}
        {!loading && pharmacies.length === 0 && !error && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No pharmacies found in this area.
          </div>
        )}
      </div>
    </div>
  );
}

export default NearbyPharmacies;