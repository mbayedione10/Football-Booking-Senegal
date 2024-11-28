import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';

const fields = [
  {
    id: 1,
    name: 'Stade Demba Diop',
    location: {
      address: 'Sicap Liberté, Dakar',
      coordinates: [-17.4676, 14.7167]
    },
    price: '15000',
    availability: '8:00 - 23:00',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80',
    surfaceType: 'natural' as const,
    size: {
      length: 105,
      width: 68
    }
  },
  {
    id: 2,
    name: 'Terrain Parcelles Assainies',
    location: {
      address: 'Parcelles Assainies, Dakar',
      coordinates: [-17.4506, 14.7447]
    },
    price: '12000',
    availability: '9:00 - 22:00',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80',
    surfaceType: 'artificial' as const,
    size: {
      length: 100,
      width: 64
    }
  },
  {
    id: 3,
    name: 'Complex Sportif HLM',
    location: {
      address: 'HLM, Dakar',
      coordinates: [-17.4376, 14.7067]
    },
    price: '10000',
    availability: '7:00 - 21:00',
    rating: 4.5,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80',
    surfaceType: 'hybrid' as const,
    size: {
      length: 95,
      width: 60
    }
  },
  {
    id: 4,
    name: 'Stade Municipal de Yoff',
    location: {
      address: 'Yoff, Dakar',
      coordinates: [-17.4876, 14.7467]
    },
    price: '13000',
    availability: '8:00 - 22:00',
    rating: 4.7,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&q=80',
    surfaceType: 'sand' as const,
    size: {
      length: 90,
      width: 55
    }
  }
];

export default function Fields() {
  const { t } = useTranslation();
  const [showMap, setShowMap] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    surface: '',
    price: '',
    amenities: [] as string[],
  });

  const mapMarkers = fields.map(field => ({
    position: field.location.coordinates,
    title: field.name,
    description: `${field.price} CFA/h`,
    surfaceType: field.surfaceType,
    size: field.size
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Football Fields in Dakar</h1>
        <button
          onClick={() => setShowMap(!showMap)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          {showMap ? 'Show List' : 'Show Map'}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Filters */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Surface Type
                </label>
                <select
                  value={selectedFilters.surface}
                  onChange={(e) => setSelectedFilters({...selectedFilters, surface: e.target.value})}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">All</option>
                  <option value="natural">Natural Grass</option>
                  <option value="artificial">Artificial Turf</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="sand">Sand</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={selectedFilters.price}
                  onChange={(e) => setSelectedFilters({...selectedFilters, price: e.target.value})}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">All</option>
                  <option value="low">Under 10,000 CFA</option>
                  <option value="medium">10,000 - 15,000 CFA</option>
                  <option value="high">Above 15,000 CFA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amenities
                </label>
                <div className="space-y-2">
                  {['Lighting', 'Parking', 'Changing Rooms', 'Showers'].map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.amenities.includes(amenity)}
                        onChange={(e) => {
                          const newAmenities = e.target.checked
                            ? [...selectedFilters.amenities, amenity]
                            : selectedFilters.amenities.filter(a => a !== amenity);
                          setSelectedFilters({...selectedFilters, amenities: newAmenities});
                        }}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {showMap ? (
            <div className="h-[calc(100vh-200px)] rounded-lg overflow-hidden">
              <Map markers={mapMarkers} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => (
                <Link
                  key={field.id}
                  to={`/fields/${field.id}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={field.image}
                      alt={field.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                      {field.price} CFA/h
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{field.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{field.location.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{field.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{field.rating}</span>
                      <span className="text-gray-600 text-sm">
                        ({field.reviews} {t('reviews')})
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <span className="capitalize">{field.surfaceType}</span> •{' '}
                      {field.size.length}m × {field.size.width}m
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}