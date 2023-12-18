import { formatToIDR } from '@/lib/utils';
import { ICartProduct } from '@/types/models';
import Image from 'next/image';
import Link from 'next/link';
import CartRemove from './CartRemove';
import Counter from './Counter';

type CartItemProps = {
  cart: ICartProduct;
};

const CartItem = ({ cart }: CartItemProps) => {
  const totalPrice = parseFloat(cart.price) * cart.count;

  return (
    <div className="flex h-44 w-full gap-4 bg-gray-50/30">
      <div className="flex h-44 w-3/12 items-center justify-center rounded-l-lg bg-white p-3">
        <div className="relative h-full w-full">
          <Image
            alt="product"
            src={cart.image}
            fill
            sizes="(max-width: 24px) 100vw, (max-width: 24px) 50vw, 33vw"
            quality={80}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="flex w-9/12 flex-col justify-between py-3 pr-5">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col">
            <Link
              href={`/product/${cart.id}`}
              className="max-w-sm text-xl font-bold text-gray-700">
              {cart.title}
            </Link>
            <span className="mt-1 text-sm font-medium text-gray-600">
              {cart.count} items
            </span>
          </div>
          <CartRemove id={cart.id} />
        </div>
        <div className="flex w-full items-center justify-between">
          <Counter countVal={cart.count} id={cart.id} />
          <span className="font-bold text-gray-700">
            {formatToIDR(totalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
