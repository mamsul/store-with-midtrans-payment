import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductItem = () => {
  return (
    <div className="h-auto w-72 rounded-md shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
      <div className="flex h-72 items-center justify-center rounded-t-md bg-gray-50/60">
        <div className="relative h-64 w-full border-2 border-none bg-transparent">
          <Image
            alt="product"
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            fill
            sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
            quality={80}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="flex flex-col p-3">
        <span className="font-medium text-gray-500">Bags</span>
        <Link href={'/product'} className="mt-3 font-semibold text-gray-700">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </Link>
        <div className="mt-3 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-700" />
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-700" />
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-700" />
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-700" />
        </div>
        <span className="mt-1.5 font-medium text-gray-500">120 Reviews</span>
        <span className="mt-3 font-semibold text-gray-700">Rp. 750.999.00</span>
      </div>
    </div>
  );
};

export default ProductItem;
