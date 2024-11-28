import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { surfaceTypeColors } from '../types/field';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapMarker {
  position: [number, number];
  title: string;
  description?: string;
  surfaceType: 'natural' | 'artificial' | 'hybrid' | 'sand';
  size: {
    length: number;
    width: number;
  };
}

interface MapProps {
  center?: [number, number];
  zoom?: number;
  markers?: MapMarker[];
}

export default function Map({ 
  center = [14.7167, -17.4676], // Dakar coordinates
  zoom = 12,
  markers = []
}: MapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="w-full h-full"
      style={{ minHeight: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {markers.map((marker, index) => (
        <div key={index}>
          {/* Field area circle */}
          <Circle
            center={marker.position}
            radius={Math.sqrt(marker.size.length * marker.size.width) * 0.5}
            pathOptions={{
              fillColor: surfaceTypeColors[marker.surfaceType],
              fillOpacity: 0.6,
              color: surfaceTypeColors[marker.surfaceType],
              weight: 1
            }}
          />
          
          {/* Location marker */}
          <Marker position={marker.position}>
            {(marker.title || marker.description) && (
              <Popup>
                <div className="space-y-2">
                  {marker.title && (
                    <h3 className="font-semibold text-lg">{marker.title}</h3>
                  )}
                  {marker.description && <p>{marker.description}</p>}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Surface:</span>
                    <span className="text-sm capitalize">{marker.surfaceType}</span>
                  </div>
                  <div className="text-sm">
                    Dimensions: {marker.size.length}m × {marker.size.width}m
                  </div>
                </div>
              </Popup>
            )}
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}