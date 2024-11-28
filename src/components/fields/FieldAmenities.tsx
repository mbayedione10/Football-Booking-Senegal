import {
  Lightbulb,
  Car,
  Bath,
  Users,
  Clock,
  Dumbbell,
  type LucideIcon
} from 'lucide-react';
import type { FieldAmenity } from '../../types/field';

const iconMap: Record<string, LucideIcon> = {
  lighting: Lightbulb,
  parking: Car,
  showers: Bath,
  changingRooms: Users,
  timing: Clock,
  field: Dumbbell,
};

interface FieldAmenitiesProps {
  amenities: FieldAmenity[];
}

export default function FieldAmenities({ amenities }: FieldAmenitiesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {amenities.map((amenity) => {
        const Icon = iconMap[amenity.icon] || Dumbbell;
        return (
          <div
            key={amenity.id}
            className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
          >
            <Icon className="w-6 h-6 text-indigo-600" />
            <span className="text-gray-700">{amenity.name}</span>
          </div>
        );
      })}
    </div>
  );
}