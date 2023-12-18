import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

type StarReviewProps = {
  value: number;
};

const StarReview = ({ value }: StarReviewProps) => {
  return (
    <Star
      className={cn(
        'h-3.5 w-3.5 fill-yellow-500 text-yellow-700',
        value ? 'fill-yellow-500' : 'fill-white',
      )}
    />
  );
};

export default StarReview;
