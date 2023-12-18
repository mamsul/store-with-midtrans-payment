import { fetchProductById } from '@/_action';
import BackButton from '@/components/product/BackButton';
import ProductDetailCheckout from '@/components/product/ProductDetailCheckout';
import ProductDetailImage from '@/components/product/ProductDetailImage';
import ProductOption from '@/components/product/ProductOption';
import StarReview from '@/components/product/StarReview';
import { formatToIDR } from '@/lib/utils';
import { productStore } from '@/store';
import Link from 'next/link';
import { Suspense } from 'react';

type ProductProps = {
  params: {
    id: string;
  };
};

const ProductContent = async ({ id }: { id: string }) => {
  const product = await fetchProductById(id);
  const { image, category, price, title, description } = product;

  const idrExhange = productStore.getState().idrExchange;
  const idrPrice: number = Math.floor(parseFloat(price) * idrExhange);

  return (
    <div className="mt-10 flex h-[90%] w-full">
      <div className="h-full w-1/2 rounded-l-lg bg-white p-12">
        <ProductDetailImage image={image} />
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
              {category}
            </Link>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-800">{title}</h1>
          <div className="mt-3 flex items-center gap-1">
            {[1, 1, 1, 1, 0].map((item) => (
              <StarReview key={item} value={item} />
            ))}

            <span className="ms-4 font-medium text-gray-500">120</span>
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-700">
            {formatToIDR(idrPrice)}
          </p>

          <div className="mt-10 flex flex-col space-y-4 text-gray-700">
            <p className="">{description}</p>
          </div>
        </div>

        <ProductDetailCheckout
          product={{ ...product, price: idrPrice.toString() }}
        />
      </div>
    </div>
  );
};

const Product = ({ params }: ProductProps) => {
  return (
    <Suspense fallback={<p className="mt-10">Please wait...</p>}>
      <ProductContent id={params.id} />
    </Suspense>
  );
};

export default Product;
