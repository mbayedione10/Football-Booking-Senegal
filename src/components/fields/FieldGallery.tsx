import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { FieldImage } from '../../types/field';

interface FieldGalleryProps {
  images: FieldImage[];
}

export default function FieldGallery({ images }: FieldGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative h-96">
        <img
          src={images[currentImage].url}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          onClick={() => setShowLightbox(true)}
        />
        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentImage(index)}
            className={`relative h-24 ${
              index === currentImage ? 'ring-2 ring-indigo-600' : ''
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </button>
        ))}
      </div>

      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[currentImage].url}
            alt={images[currentImage].alt}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}