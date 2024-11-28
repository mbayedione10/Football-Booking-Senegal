import { Star, ThumbsUp } from 'lucide-react';
import type { FieldReview } from '../../types/field';

interface FieldReviewsProps {
  reviews: FieldReview[];
  averageRating: number;
}

export default function FieldReviews({ reviews, averageRating }: FieldReviewsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.floor(averageRating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
        <span className="text-gray-600">({reviews.length} avis)</span>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{review.userName}</h4>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
            <button className="flex items-center space-x-2 mt-2 text-gray-500 hover:text-indigo-600">
              <ThumbsUp className="w-4 h-4" />
              <span>Utile</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}