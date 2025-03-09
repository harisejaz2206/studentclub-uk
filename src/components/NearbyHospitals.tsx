import React, { useState, useEffect } from 'react';
import { Building2, Clock, Phone, MapPin, Search, Loader2, Heart, AlertTriangle, Stethoscope } from 'lucide-react';
import axios from 'axios';

interface Hospital {
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
    emergency?: string;
    healthcare?: string;
    operator?: string;
    website?: string;
    'emergency:phone'?: string;
  };
}

function NearbyHospitals() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState('London');

  const fetchHospitals = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const query = `[out:json];area[name="${city}"]->.searchArea;(node[amenity=hospital](area.searchArea););out;`;
      const response = await axios.get(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
      setHospitals(response.data.elements);
    } catch (err) {
      setError('Failed to fetch hospital data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHospitals(searchCity);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchHospitals(searchCity);
  };

  const getFacilityType = (tags: Hospital['tags']) => {
    if (tags.emergency === 'yes') return 'Emergency Hospital';
    if (tags.healthcare === 'hospital') return 'General Hospital';
    return 'Medical Facility';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Notice */}
        <div className="mb-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
            <div>
              <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
                Emergency?
              </h2>
              <p className="text-red-600 dark:text-red-400">
                Call 999 immediately for emergencies. Call 111 for non-emergency medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Nearby Hospitals
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Locate NHS hospitals and medical facilities in your area
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
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
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  hospital.tags.emergency === 'yes' 
                    ? 'bg-red-50 dark:bg-red-900/20' 
                    : 'bg-blue-50 dark:bg-blue-900/20'
                }`}>
                  <Building2 className={`h-6 w-6 ${
                    hospital.tags.emergency === 'yes'
                      ? 'text-red-500 dark:text-red-400'
                      : 'text-blue-500 dark:text-blue-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {hospital.tags.name || 'Unnamed Hospital'}
                    </h3>
                    {hospital.tags.emergency === 'yes' && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        A&E
                      </span>
                    )}
                  </div>

                  {/* Facility Type */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Stethoscope className="h-4 w-4 flex-shrink-0" />
                    <span>{getFacilityType(hospital.tags)}</span>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {[
                        hospital.tags['addr:housenumber'],
                        hospital.tags['addr:street'],
                        hospital.tags['addr:postcode']
                      ].filter(Boolean).join(', ')}
                    </span>
                  </div>

                  {/* Emergency Phone */}
                  {hospital.tags['emergency:phone'] && (
                    <div className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 mb-2 font-medium">
                      <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{hospital.tags['emergency:phone']}</span>
                    </div>
                  )}

                  {/* Regular Phone */}
                  {hospital.tags.phone && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{hospital.tags.phone}</span>
                    </div>
                  )}

                  {/* Opening Hours */}
                  {hospital.tags.opening_hours && (
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>{hospital.tags.opening_hours}</span>
                    </div>
                  )}

                  {/* NHS Badge */}
                  {hospital.tags.operator?.includes('NHS') && (
                    <div className="mt-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        <Heart className="h-3 w-3 mr-1" />
                        NHS Hospital
                      </span>
                    </div>
                  )}

                  {/* Map Link */}
                  <a
                    href={`https://www.google.com/maps?q=${hospital.lat},${hospital.lon}`}
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
            <Loader2 className="h-8 w-8 animate-spin text-red-600 dark:text-red-400" />
          </div>
        )}

        {/* No Results */}
        {!loading && hospitals.length === 0 && !error && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No hospitals found in this area.
          </div>
        )}

        {/* Healthcare Information */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Important Healthcare Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 mt-1 text-red-500" />
              <span>For emergencies, always call 999</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1 text-blue-500" />
              <span>Call 111 for non-emergency medical advice</span>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="h-4 w-4 mt-1 text-red-500" />
              <span>Register with a GP for routine healthcare</span>
            </div>
            <div className="flex items-start gap-2">
              <Stethoscope className="h-4 w-4 mt-1 text-blue-500" />
              <span>A&E departments are for serious emergencies only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearbyHospitals;