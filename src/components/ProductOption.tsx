import { Heart, MoreVertical, Share2 } from 'lucide-react';

const ProductOption = () => {
  return (
    <div className="flex space-x-6">
      <Share2 className="h-6 w-6 cursor-pointer" />
      <Heart className="h-6 w-6 cursor-pointer" />
      <MoreVertical className="h-6 w-6 cursor-pointer" />
    </div>
  );
};

export default ProductOption;
