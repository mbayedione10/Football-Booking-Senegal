import { Users, Clock } from 'lucide-react';
import type { Field } from '../../types/field';

interface FieldInfoProps {
  field: Field;
}

export default function FieldInfo({ field }: FieldInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Informations</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <Users className="w-5 h-5 text-gray-500 mr-3" />
          <div>
            <div className="font-medium">Capacité</div>
            <div className="text-gray-600">{field.capacity} joueurs</div>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-gray-500 mr-3" />
          <div>
            <div className="font-medium">Horaires</div>
            <div className="text-gray-600">
              {field.openingHours[0].open} - {field.openingHours[0].close}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}