import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Map from '../components/Map';
import FieldGallery from '../components/fields/FieldGallery';
import FieldAmenities from '../components/fields/FieldAmenities';
import FieldAvailability from '../components/fields/FieldAvailability';
import FieldReviews from '../components/fields/FieldReviews';
import FieldInfo from '../components/fields/FieldInfo';
import FieldContact from '../components/fields/FieldContact';
import BookingForm from '../components/fields/BookingForm';
import type { Field } from '../types/field';

// This would normally come from an API
const mockField: Field = {
  id: '1',
  name: 'Stade Demba Diop',
  description: 'Un terrain de football professionnel situé au cœur de Dakar.',
  images: [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e',
      alt: 'Vue principale du stade'
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460',
      alt: 'Terrain de football'
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377',
      alt: 'Vestiaires'
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d',
      alt: 'Tribune'
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6',
      alt: 'Vue nocturne'
    }
  ],
  location: {
    address: 'Sicap Liberté, Dakar',
    coordinates: [-17.4676, 14.7167]
  },
  openingHours: [
    { day: 'Lundi', open: '08:00', close: '22:00' },
    { day: 'Mardi', open: '08:00', close: '22:00' },
    { day: 'Mercredi', open: '08:00', close: '22:00' },
    { day: 'Jeudi', open: '08:00', close: '22:00' },
    { day: 'Vendredi', open: '08:00', close: '22:00' },
    { day: 'Samedi', open: '09:00', close: '23:00' },
    { day: 'Dimanche', open: '09:00', close: '23:00' }
  ],
  amenities: [
    { id: '1', name: 'Éclairage', icon: 'lighting' },
    { id: '2', name: 'Parking', icon: 'parking' },
    { id: '3', name: 'Vestiaires', icon: 'changingRooms' },
    { id: '4', name: 'Douches', icon: 'showers' }
  ],
  pricing: {
    hourly: 15000,
    daily: 150000
  },
  sports: ['Football', 'Football à 7'],
  capacity: 22,
  rules: [
    'Chaussures de football obligatoires',
    'Réservation minimum 24h à l\'avance',
    'Annulation gratuite jusqu\'à 48h avant'
  ],
  manager: {
    name: 'Moussa Diop',
    phone: '+221 77 123 45 67',
    email: 'contact@stadedembadiop.sn'
  },
  reviews: [
    {
      id: '1',
      userId: '1',
      userName: 'Abdou Diallo',
      rating: 5,
      comment: 'Excellent terrain, bien entretenu avec de bonnes installations.',
      date: '2024-02-15'
    },
    {
      id: '2',
      userId: '2',
      userName: 'Fatou Sow',
      rating: 4,
      comment: 'Très bon accueil, vestiaires propres. Seul bémol: le parking un peu petit.',
      date: '2024-02-10'
    }
  ],
  averageRating: 4.5
};

export default function FieldDetails() {
  const { id } = useParams();
  const field = mockField; // In reality, fetch based on id

  const handleBooking = async (data: any) => {
    try {
      // In reality, this would be an API call
      console.log('Booking data:', data);
      toast.success('Réservation effectuée avec succès!');
    } catch (error) {
      toast.error('Erreur lors de la réservation. Veuillez réessayer.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{field.name}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{field.location.address}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">
              {field.pricing.hourly.toLocaleString()} CFA
              <span className="text-sm text-gray-600">/heure</span>
            </div>
            {field.pricing.daily && (
              <div className="text-gray-600">
                {field.pricing.daily.toLocaleString()} CFA/jour
              </div>
            )}
          </div>
        </div>

        <FieldGallery images={field.images} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700">{field.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Équipements</h2>
              <FieldAmenities amenities={field.amenities} />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disponibilités</h2>
              <FieldAvailability openingHours={field.openingHours} />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Avis</h2>
              <FieldReviews reviews={field.reviews} averageRating={field.averageRating} />
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Réserver ce terrain</h3>
              <BookingForm onSubmit={handleBooking} price={field.pricing.hourly} />
            </div>
            <FieldInfo field={field} />
            <FieldContact manager={field.manager} />
            <div className="h-64 rounded-lg overflow-hidden">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}