import { useState } from 'react';
import { format, addDays, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, Clock } from 'lucide-react';
import type { OpeningHours } from '../../types/field';

interface FieldAvailabilityProps {
  openingHours: OpeningHours[];
  onTimeSelect?: (time: string) => void;
}

export default function FieldAvailability({ openingHours, onTimeSelect }: FieldAvailabilityProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
                     '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onTimeSelect?.(time);
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {next7Days.map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => setSelectedDate(date)}
            className={`flex flex-col items-center p-3 rounded-lg min-w-[100px] ${
              isSameDay(selectedDate, date)
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-sm font-medium">
              {format(date, 'EEE', { locale: fr })}
            </span>
            <span className="text-lg font-semibold">
              {format(date, 'd', { locale: fr })}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={`flex items-center justify-center p-3 rounded-lg ${
              selectedTime === time
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </button>
        ))}
      </div>
    </div>
  );
}