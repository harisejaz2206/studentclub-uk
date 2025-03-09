import React, { useState, useEffect } from 'react';
import { Coffee, Clock, Phone, MapPin, Search, Loader2, Wifi, Volume2, Zap, BookOpen, Star, Users } from 'lucide-react';
import axios from 'axios';

interface Cafe {
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
    internet_access?: string;
    cuisine?: string;
    outdoor_seating?: string;
    website?: string;
    'payment:cards'?: string;
    socket?: string;
  };
}

function NearbyCafes() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('London');
  const [filter, setFilter] = useState('all'); // 'all', 'study', 'quiet'

  const fetchCafes = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const query = `[out:json];area[name="${city}"]->.searchArea;(node[amenity=cafe](area.searchArea););out;`;
      const response = await axios.get(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
      setCafes(response.data.elements);
    } catch (err) {
      setError('Failed to fetch cafe data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCafes(searchCity);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCafes(searchCity);
  };

  // Helper function to determine if a cafe is study-friendly
  const isStudyFriendly = (cafe: Cafe) => {
    return (
      cafe.tags.internet_access === 'yes' ||
      cafe.tags.socket === 'yes' ||
      cafe.tags.name?.toLowerCase().includes('study') ||
      cafe.tags.name?.toLowerCase().includes('library')
    );
  };

  // Filter cafes based on selected filter
  const filteredCafes = cafes.filter(cafe => {
    if (filter === 'study') return isStudyFriendly(cafe);
    if (filter === 'quiet') return !cafe.tags.outdoor_seating;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Study Cafes
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover perfect spots for studying, group work, or just grabbing a coffee
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  placeholder="Enter city name..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
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

          {/* Filter Buttons */}
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === 'all' 
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              All Cafes
            </button>
            <button
              onClick={() => setFilter('study')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === 'study'
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Study-Friendly
            </button>
            <button
              onClick={() => setFilter('quiet')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === 'quiet'
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Quiet Spots
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-xl mx-auto mb-8 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
            {error}
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCafes.map((cafe) => (
            <div
              key={cafe.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                  <Coffee className="h-6 w-6 text-amber-500 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cafe.tags.name || 'Unnamed Cafe'}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cafe.tags.internet_access && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        <Wifi className="h-3 w-3 mr-1" />
                        WiFi
                      </span>
                    )}
                    {cafe.tags.socket === 'yes' && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        <Zap className="h-3 w-3 mr-1" />
                        Power Outlets
                      </span>
                    )}
                    {!cafe.tags.outdoor_seating && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        <Volume2 className="h-3 w-3 mr-1" />
                        Quiet Space
                      </span>
                    )}
                    {isStudyFriendly(cafe) && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Study-Friendly
                      </span>
                    )}
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {[
                        cafe.tags['addr:housenumber'],
                        cafe.tags['addr:street'],
                        cafe.tags['addr:postcode']
                      ].filter(Boolean).join(', ')}
                    </span>
                  </div>

                  {/* Opening Hours */}
                  {cafe.tags.opening_hours && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{cafe.tags.opening_hours}</span>
                    </div>
                  )}

                  {/* Phone */}
                  {cafe.tags.phone && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{cafe.tags.phone}</span>
                    </div>
                  )}

                  {/* Map Link */}
                  <a
                    href={`https://www.google.com/maps?q=${cafe.lat},${cafe.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-amber-600 dark:text-amber-400 hover:underline"
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
            <Loader2 className="h-8 w-8 animate-spin text-amber-600 dark:text-amber-400" />
          </div>
        )}

        {/* No Results */}
        {!loading && filteredCafes.length === 0 && !error && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No cafes found matching your criteria.
          </div>
        )}

        {/* Study Tips Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Tips for Studying in Cafes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <Wifi className="h-4 w-4 mt-1 text-amber-500" />
              <span>Check WiFi availability and speed before settling in</span>
            </div>
            <div className="flex items-start gap-2">
              <Users className="h-4 w-4 mt-1 text-amber-500" />
              <span>Consider off-peak hours for quieter study sessions</span>
            </div>
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 mt-1 text-amber-500" />
              <span>Look for spots with power outlets for longer sessions</span>
            </div>
            <div className="flex items-start gap-2">
              <Star className="h-4 w-4 mt-1 text-amber-500" />
              <span>Support the cafe by making regular purchases</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyCafes;