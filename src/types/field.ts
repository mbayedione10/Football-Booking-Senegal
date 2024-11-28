export interface FieldImage {
  id: string;
  url: string;
  alt: string;
}

export interface FieldAmenity {
  id: string;
  name: string;
  icon: string;
}

export interface FieldReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
}

export interface Field {
  id: string;
  name: string;
  description: string;
  images: FieldImage[];
  location: {
    address: string;
    coordinates: [number, number];
  };
  openingHours: OpeningHours[];
  amenities: FieldAmenity[];
  pricing: {
    hourly: number;
    daily?: number;
  };
  sports: string[];
  capacity: number;
  rules: string[];
  manager: {
    name: string;
    phone: string;
    email: string;
  };
  reviews: FieldReview[];
  averageRating: number;
  surfaceType: 'natural' | 'artificial' | 'hybrid' | 'sand';
  elevation?: number; // in meters
  size: {
    length: number; // in meters
    width: number; // in meters
  };
}

export const surfaceTypeColors = {
  natural: '#4ade80', // green
  artificial: '#22c55e', // darker green
  hybrid: '#15803d', // even darker green
  sand: '#fcd34d', // yellow
} as const;