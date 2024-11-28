import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const bookingSchema = z.object({
  date: z.string().min(1, 'La date est requise'),
  time: z.string().min(1, "L'heure est requise"),
  duration: z.number().min(1).max(4),
  players: z.number().min(1).max(22),
  notes: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  onSubmit: (data: BookingForm) => void;
  price: number;
}

export default function BookingForm({ onSubmit, price }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      duration: 1,
      players: 10,
    },
  });

  const duration = watch('duration');
  const totalPrice = price * duration;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date et heure
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="date"
              {...register('date')}
              min={format(new Date(), 'yyyy-MM-dd')}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>
          <div>
            <select
              {...register('time')}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Sélectionner une heure</option>
              {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
                <option key={hour} value={`${hour}:00`}>
                  {`${hour}:00`}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Durée (heures)
        </label>
        <select
          {...register('duration', { valueAsNumber: true })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {[1, 2, 3, 4].map((hours) => (
            <option key={hours} value={hours}>
              {hours} heure{hours > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre de joueurs
        </label>
        <input
          type="number"
          {...register('players', { valueAsNumber: true })}
          min="1"
          max="22"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.players && (
          <p className="mt-1 text-sm text-red-600">{errors.players.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes supplémentaires
        </label>
        <textarea
          {...register('notes')}
          rows={3}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Informations complémentaires..."
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Prix par heure</span>
          <span className="font-medium">{price.toLocaleString()} CFA</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Durée</span>
          <span className="font-medium">{duration} heure{duration > 1 ? 's' : ''}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total</span>
            <span className="text-xl font-bold text-indigo-600">
              {totalPrice.toLocaleString()} CFA
            </span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Réserver maintenant
      </button>
    </form>
  );
}