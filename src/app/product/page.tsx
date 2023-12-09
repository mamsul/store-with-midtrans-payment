import BackButton from '@/components/BackButton';
import ProductCheckout from '@/components/ProductCheckout';
import ProductDetailImage from '@/components/ProductDetailImage';
import ProductOption from '@/components/ProductOption';
import { Star } from 'lucide-react';
import Link from 'next/link';

const Product = () => {
  return (
    <div className="mt-10 flex h-[90%] w-full">
      <div className="h-full w-1/2 rounded-l-md bg-gray-50/60 p-12">
        <ProductDetailImage />
      </div>
      <div className="relative flex h-full w-1/2 flex-col justify-between p-8">
        <div className="flex flex-row justify-between">
          <BackButton />
          <ProductOption />
        </div>

        <div className="h-full overflow-auto">
          <div className="mt-12 flex w-full flex-row flex-wrap gap-3">
            <Link
              href="#"
              className="font-medium text-gray-500 underline underline-offset-2">
              bags
            </Link>
            <Link
              href="#"
              className="font-medium text-gray-500 underline underline-offset-2">
              men&apos;s clothing
            </Link>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-800">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <div className="mt-3 flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-600" />
            <Star className="h-4 w-4 fill-white text-yellow-600" />

            <span className="ms-4 font-medium text-gray-500">120</span>
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-700">
            Rp. 750.999.00
          </p>

          <div className="mt-10 flex flex-col space-y-4 text-gray-700">
            <p className="">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>
                Size: <strong>L / XL / XXL</strong>
              </li>
              <li>
                Compartment: <strong>4</strong>
              </li>
              <li>
                Made in: <strong>Indonesia</strong>
              </li>
            </ul>
          </div>
        </div>

        <ProductCheckout />
      </div>
    </div>
  );
};

export default Product;
