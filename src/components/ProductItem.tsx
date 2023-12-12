import { formatToIDR } from '@/lib/utils';
import { productStore } from '@/store';
import { IProduct } from '@/types/models';
import Image from 'next/image';
import Link from 'next/link';
import ProductItemCheckoutBtn from './ProductItemCheckoutBtn';
import StarReview from './StarReview';

type ProductItemProps = {
  product: IProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const { id, image, category, title, price } = product;

  const idrExhange = productStore.getState().idrExchange;
  const idrPrice: number = Math.floor(parseFloat(price) * idrExhange);

  return (
    <div className="h-max w-72 rounded-lg bg-gray-50/30 transition-all duration-300 hover:-translate-y-2">
      <div className="flex h-72 items-center justify-center rounded-t-lg bg-white">
        <div className="relative h-64 w-full border-2 border-none bg-transparent">
          <Image
            alt="product"
            src={image}
            fill
            sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
            quality={80}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="flex flex-col p-3">
        <span className="text-sm font-medium text-gray-500">{category}</span>
        <Link
          href={`/product/${id}`}
          className="mt-3 truncate text-xl font-bold text-gray-700">
          {title}
        </Link>
        <div className="mt-3 flex items-center gap-1">
          {[1, 1, 1, 1, 0].map((item) => (
            <StarReview key={item} value={item} />
          ))}
          <span className="ms-3 text-sm font-medium text-gray-500">120</span>
        </div>
        <span className="mt-3 font-bold text-gray-700">
          {formatToIDR(idrPrice)}
        </span>

        <ProductItemCheckoutBtn className="mt-5" />
      </div>
    </div>
  );
};

export default ProductItem;
