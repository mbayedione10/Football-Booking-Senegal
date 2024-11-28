import { MapPin, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80"
            alt="Football field in Dakar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8">
              {t('hero.subtitle')}
            </p>
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Featured Fields */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">{t('featured.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFields.map((field) => (
            <Link
              key={field.id}
              to={`/fields/${field.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                  {field.price} CFA/h
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{field.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{field.location}</span>
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">{t('map.title')}</h2>
        <div className="h-[500px] rounded-lg overflow-hidden">
          <Map />
        </div>
      </section>
    </div>
  );
}

const featuredFields = [
  {
    id: 1,
    name: 'Stade Demba Diop',
    location: 'Sicap Liberté, Dakar',
    price: '15000',
    availability: '8:00 - 23:00',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Terrain Parcelles Assainies',
    location: 'Parcelles Assainies, Dakar',
    price: '12000',
    availability: '9:00 - 22:00',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Complex Sportif HLM',
    location: 'HLM, Dakar',
    price: '10000',
    availability: '7:00 - 21:00',
    rating: 4.5,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80'
  }
];